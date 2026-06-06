import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Outdoor Picks",
  description:
    "Learn how Outdoor Picks collects, uses, and protects your personal data. Our privacy policy outlines our commitment to your privacy and data security, including Google AdSense and GDPR/CCPA compliance.",
};

export default function PrivacyPage() {
  return (
    <div className="relative pt-32 pb-20 px-6">
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#D97706] bg-[#4A2424] px-3 py-1.5 rounded-md mb-4">
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#FEF3C7] tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-[#D97706] text-sm">
            Last updated: May 21, 2026
          </p>
        </div>

        <div className="space-y-8 text-[#D97706] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#FEF3C7] mb-3">1. Introduction</h2>
            <p>
              Outdoor Picks (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website outdoorpicks.com (the &quot;Site&quot;). Please read this
              policy carefully. If you do not agree with the terms, do not access the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#FEF3C7] mb-3">2. Information We Collect</h2>
            <h3 className="text-lg font-semibold text-[#FEF3C7] mb-2">Personal Data</h3>
            <p className="mb-3">
              We may collect personally identifiable information such as your name, email address,
              and any other details you voluntarily submit through our contact forms, newsletter
              signups, or gear submission requests.
            </p>
            <h3 className="text-lg font-semibold text-[#FEF3C7] mb-2">Automatically Collected Data</h3>
            <p className="mb-3">
              When you visit the Site, we automatically collect certain information including your
              IP address, browser type, operating system, referring URLs, device type, and browsing
              behavior. This data helps us improve our services and understand how users interact
              with our platform.
            </p>
            <h3 className="text-lg font-semibold text-[#FEF3C7] mb-2">Cookies and Tracking Technologies</h3>
            <p>
              We use cookies, web beacons, and similar tracking technologies to enhance your
              browsing experience, analyze site traffic, and serve targeted advertisements. You
              can control cookie preferences through your browser settings. For more details, see
              our Cookie Policy below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#FEF3C7] mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the collected data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To operate, maintain, and improve the Site and our services</li>
              <li>To respond to your comments, questions, and support requests</li>
              <li>To send you newsletters and updates about new gear reviews (with your consent)</li>
              <li>To analyze usage trends and measure the effectiveness of our content</li>
              <li>To detect, prevent, and address technical issues and fraudulent activity</li>
              <li>To display personalized advertisements through Google AdSense</li>
              <li>To comply with legal obligations and enforce our Terms of Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#FEF3C7] mb-3">4. Google AdSense</h2>
            <p className="mb-3">
              We use Google AdSense to display advertisements on our Site. Google AdSense uses
              cookies and web beacons to serve ads based on your prior visits to our website and
              other websites across the internet.
            </p>
            <p className="mb-3">
              Google&apos;s use of advertising cookies enables it and its partners to serve ads to
              you based on your visit to our Site and/or other sites on the Internet. You may opt
              out of personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D97706] hover:underline"
              >
                Google&apos;s Ads Settings
              </a>
              .
            </p>
            <p className="mb-3">
              As part of Google AdSense, we and third-party vendors, including Google, use
              first-party cookies (such as the Google Analytics cookies) and third-party cookies
              (such as the DoubleClick cookie) together to inform, optimize, and serve ads based
              on someone&apos;s past visits to our Site.
            </p>
            <p>
              For more information about how Google uses your data, please visit{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D97706] hover:underline"
              >
                How Google uses information from sites that use their services
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#FEF3C7] mb-3">5. Information Sharing and Disclosure</h2>
            <p className="mb-3">
              We do not sell your personal information. We may share your data in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Service Providers:</strong> We engage trusted third-party companies
                (analytics, hosting, email delivery) to assist in operating our Site. These
                providers have access to your data only to perform specific tasks and are
                contractually obligated to protect it.
              </li>
              <li>
                <strong>Advertising Partners:</strong> Google AdSense and other ad networks may
                use cookies to serve relevant ads based on your browsing history. Google&apos;s use of
                advertising cookies enables it and its partners to serve ads based on your visit
                to our Site. You may opt out of personalized advertising as described above.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information if required by
                law, court order, or governmental regulation, or if such disclosure is necessary
                to protect our rights or the safety of our users.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or
                sale of assets, your information may be transferred as part of the transaction.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#FEF3C7] mb-3">6. Cookie Policy</h2>
            <p className="mb-3">
              Our Site uses the following types of cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Required for the basic functionality of the
                Site, such as navigation and access to secure areas.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how visitors interact with
                the Site by collecting anonymous information about pages visited and time spent.
                We use Google Analytics for this purpose.
              </li>
              <li>
                <strong>Advertising Cookies:</strong> Used by Google AdSense to deliver
                personalized advertisements based on your interests and browsing behavior across
                websites. These cookies track your visits across different sites to build a
                profile of your interests.
              </li>
              <li>
                <strong>Functional Cookies:</strong> Remember your preferences and settings to
                provide a personalized experience.
              </li>
            </ul>
            <p className="mt-3">
              You can manage cookie preferences through your browser settings. Opting out of
              certain cookies may affect your experience on our Site. Most browsers allow you to
              refuse or accept cookies, delete cookies, or be notified when a cookie is set.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#FEF3C7] mb-3">7. Your Rights (GDPR & CCPA)</h2>
            <p className="mb-3">
              Depending on your jurisdiction, you may have the following rights regarding your
              personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Right to Deletion (Right to be Forgotten):</strong> Request deletion of your personal data, subject to legal retention requirements.</li>
              <li><strong>Right to Restrict Processing:</strong> Request that we limit how we use your data.</li>
              <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service provider in a structured, commonly used format.</li>
              <li><strong>Right to Object:</strong> Object to the processing of your personal data for direct marketing or legitimate interests.</li>
              <li><strong>Right to Opt Out (CCPA):</strong> California residents may opt out of the sale of their personal information. We do not sell personal information.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at info@outdoorpicks.com. We
              will respond to your request within 30 days. We may need to verify your identity
              before processing your request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#FEF3C7] mb-3">8. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfill the purposes
              described in this Privacy Policy, or as required by applicable law. When we no
              longer have a legitimate business need to process your information, we will delete
              or anonymize it. If deletion is not immediately possible (e.g., due to backup
              retention), we will securely isolate your data from further processing until
              deletion is possible.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#FEF3C7] mb-3">9. Data Security</h2>
            <p>
              We implement industry-standard security measures including SSL/TLS encryption,
              firewalls, and secure server infrastructure to protect your personal information.
              However, no method of transmission over the Internet is 100% secure, and we cannot
              guarantee absolute security. We encourage you to use strong passwords and protect
              your account credentials.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#FEF3C7] mb-3">10. Third-Party Links</h2>
            <p>
              Our Site contains links to third-party websites, gear manufacturers, and outdoor
              retailers listed in our directory. We are not responsible for the privacy practices of these
              external sites. We encourage you to review their privacy policies before providing
              any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#FEF3C7] mb-3">11. Children&apos;s Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 16. We do not
              knowingly collect personal information from children. If we become aware that a
              child has provided us with personal data, we will delete it immediately. Parents
              or guardians who believe their child has submitted information to us should contact
              us at info@outdoorpicks.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#FEF3C7] mb-3">12. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your
              own, including the United States. We ensure appropriate safeguards are in place
              through standard contractual clauses and data processing agreements to protect your
              information in accordance with applicable data protection laws, including the GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#FEF3C7] mb-3">13. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of
              material changes by posting the updated policy on this page with a revised &quot;Last
              updated&quot; date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#FEF3C7] mb-3">14. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please
              contact us:
            </p>
            <div className="mt-4 p-5 bg-[#2A1414] border border-[#4A2424] rounded-xl">
              <p className="mb-2"><strong className="text-[#FEF3C7]">Email:</strong> info@outdoorpicks.com</p>
              <p className="mb-2"><strong className="text-[#FEF3C7]">Legal:</strong> legal@outdoorpicks.com</p>
              <p className="mb-2"><strong className="text-[#FEF3C7]">Privacy:</strong> privacy@outdoorpicks.com</p>
              <p className="mb-2"><strong className="text-[#FEF3C7]">Support:</strong> support@outdoorpicks.com</p>
              <p className="mb-2"><strong className="text-[#FEF3C7]">Website:</strong> outdoorpicks.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
