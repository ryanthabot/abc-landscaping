import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — Landscape Designs Ontario',
  description: 'Privacy policy for Landscape Designs Ontario. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mt-3">
            Last updated: April 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="prose prose-neutral max-w-none space-y-10 text-foreground/90">

          <section>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
              Introduction
            </h2>
            <p>
              Landscape Designs Ontario (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard information when you visit our website or contact us for services.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
              Information We Collect
            </h2>
            <p className="mb-4">When you use our contact form or request a quote, we may collect the following information:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Name</strong> — Your first and last name</li>
              <li><strong className="text-foreground">Email Address</strong> — So we can respond to your inquiry</li>
              <li><strong className="text-foreground">Phone Number</strong> — Optional, for follow-up contact</li>
              <li><strong className="text-foreground">Location</strong> — Your general area to determine service availability</li>
              <li><strong className="text-foreground">Project Details</strong> — Information about the services you&apos;re interested in</li>
            </ul>
            <p className="mt-4">
              We do <strong>not</strong> collect information through cookies, tracking pixels, or third-party analytics on this website.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
              How We Use Your Information
            </h2>
            <p className="mb-4">Your information is used solely for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>To respond to your quote request or inquiry</li>
              <li>To schedule consultations and provide service estimates</li>
              <li>To communicate with you about your project</li>
            </ul>
            <p className="mt-4">
              Your personal information is <strong>never</strong> used for marketing, advertising, or any purpose beyond responding to your inquiry.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
              Information Storage &amp; Security
            </h2>
            <p className="mb-4">
              All personal information submitted through our contact form is delivered directly to our company email and stored only within our email system. We do not use a database, CRM, or third-party storage service to retain your information.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Form submissions are sent directly to Jerome via email</li>
              <li>An automatic confirmation email is sent to you for your records</li>
              <li>No data is stored on our web servers beyond the email delivery</li>
              <li>Email communications are protected by our email provider&apos;s security measures</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
              We Do Not Sell Your Information
            </h2>
            <p>
              We will <strong>never</strong> sell, rent, trade, or share your personal information with third parties for their marketing purposes. Your information is used exclusively by Landscape Designs Ontario to respond to your inquiry and provide the services you&apos;ve requested.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
              Third-Party Services
            </h2>
            <p className="mb-4">
              We use the following third-party services to operate our website:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Resend</strong> — Used to deliver contact form submissions to our email and send confirmation emails. Resend processes email delivery but does not store or use your personal information for any other purpose.</li>
              <li><strong className="text-foreground">Vercel / Cloudflare</strong> — Our website hosting providers. They may collect standard server logs (IP address, browser type) necessary to serve web pages, but we do not use this data for tracking or profiling.</li>
            </ul>
            <p className="mt-4">
              These services have their own privacy policies governing their data practices.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
              Data Retention
            </h2>
            <p>
              We retain your personal information only as long as necessary to respond to your inquiry and complete any requested services. communications are kept in our email records for reference. If you request deletion of your information, we will promptly remove it from our email records.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
              Your Rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of any inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of any future communications</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:landscapedesignsontario@gmail.com" className="text-primary hover:underline font-medium">
                landscapedesignsontario@gmail.com
              </a>{' '}
              or call{' '}
              <a href="tel:7057721839" className="text-primary hover:underline font-medium">
                (705) 772-1839
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
              Children&apos;s Privacy
            </h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a minor, please contact us and we will promptly remove it.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Your continued use of our website after any changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or how your information is handled, please reach out:
            </p>
            <div className="mt-4 bg-primary/5 rounded-2xl p-6 space-y-2">
              <p className="font-heading font-bold text-foreground">Landscape Designs Ontario</p>
              <p className="text-muted-foreground">Operated by Jerome</p>
              <p className="text-muted-foreground">
                Email:{' '}
                <a href="mailto:landscapedesignsontario@gmail.com" className="text-primary hover:underline">
                  landscapedesignsontario@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground">
                Phone:{' '}
                <a href="tel:7057721839" className="text-primary hover:underline">
                  (705) 772-1839
                </a>
              </p>
              <p className="text-muted-foreground">Serving Durham Region &amp; GTA, Ontario</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
