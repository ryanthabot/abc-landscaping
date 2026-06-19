import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Owner email (test with karterley@gmail.com, swap to owner's real email later)
const OWNER_EMAIL = process.env.OWNER_EMAIL || 'karterley@gmail.com';

// "From" address — must be a verified domain in Resend, or use onboarding@resend.dev for testing
const FROM_EMAIL = process.env.FROM_EMAIL || 'onboarding@resend.dev';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, service, location, message } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName}`;

    // ── Email 1: To the owner ──────────────────────────────────────────
    const ownerEmailResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: OWNER_EMAIL,
      subject: `New Quote Request from ${fullName}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #16a34a; padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="margin: 0; color: #fff; font-size: 24px;">📬 New Quote Request</h1>
          </div>
          <div style="padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #6b7280; width: 120px;">Name</td>
                <td style="padding: 8px 0;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #16a34a;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Phone</td>
                <td style="padding: 8px 0;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Service</td>
                <td style="padding: 8px 0;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #6b7280;">Location</td>
                <td style="padding: 8px 0;">${location || 'Not specified'}</td>
              </tr>
            </table>
            <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e5e7eb;">
              <p style="font-weight: 600; color: #6b7280; margin-bottom: 8px;">Project Details</p>
              <p style="background: #f9fafb; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 12px;">
            Sent from A Better Choice Landscaping website
          </p>
        </div>
      `,
    });

    // ── Email 2: Auto-reply to the customer ────────────────────────────
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      replyTo: 'kevin@abclandscaping.xyz',
      subject: 'Thanks for reaching out! — ABC Landscaping',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #16a34a; padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="margin: 0; color: #fff; font-size: 24px;">🌿 Thank You, ${firstName}!</h1>
          </div>
          <div style="padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="font-size: 16px; line-height: 1.6;">
              We received your quote request for <strong>${service}</strong>. Kevin will review your project details and get back to you within <strong>24 hours</strong>.
            </p>
            <div style="background: #f9fafb; padding: 16px; border-radius: 8px; margin: 16px 0;">
              <p style="margin: 0 0 8px 0; font-weight: 600; color: #374151;">What happens next?</p>
              <ol style="margin: 0; padding-left: 20px; color: #6b7280; line-height: 1.8;">
                <li>Kevin reviews your project details</li>
                <li>We reach out to schedule a free on-site consultation</li>
                <li>You receive a detailed, transparent quote</li>
              </ol>
            </div>
            <p style="font-size: 16px; line-height: 1.6;">
              In the meantime, feel free to call or text Kevin directly at <a href="tel:3435800908" style="color: #16a34a; font-weight: 600;">(343) 580-0908</a>.
            </p>
            <p style="color: #6b7280; margin-top: 24px;">
              Best regards,<br>
              <strong style="color: #16a34a;">A Better Choice Landscaping</strong><br>
              <span style="font-size: 14px;">Bowmanville, Ontario</span>
            </p>
          </div>
          <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 12px;">
            This is an automated confirmation. We'll be in touch soon!
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, id: ownerEmailResult.data?.id });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
