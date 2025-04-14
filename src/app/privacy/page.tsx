import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 font-[family-name:var(--font-heading)]">
            Privacy Policy
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 font-[family-name:var(--font-heading)]">
              1. Introduction
            </h2>
            <p>
              FitTick (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our mobile
              application FitTick (the &quot;App&quot;). Please read this Privacy Policy
              carefully. By using the App, you consent to the practices
              described in this policy.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 font-[family-name:var(--font-heading)]">
              2. Information We Collect
            </h2>
            <h3 className="text-xl font-semibold mt-6 mb-3 font-[family-name:var(--font-heading)]">
              2.1 Personal Information
            </h3>
            <p>
              We may collect personal information that you voluntarily provide
              when using the App, including but not limited to:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Name, email address, and other contact information</li>
              <li>Account credentials for Firebase Authentication</li>
              <li>Fitness data including workouts saved by the user</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 font-[family-name:var(--font-heading)]">
              2.2 Automatically Collected Information
            </h3>
            <p>
              When you use the App, we may automatically collect certain
              information, including:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Device information (e.g., device type, operating system)</li>
              <li>App usage statistics and interaction data</li>
              <li>IP address and general location data</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 font-[family-name:var(--font-heading)]">
              3. How We Use Your Information
            </h2>
            <p>
              We may use the information we collect for various purposes,
              including:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Providing, maintaining, and improving the App</li>
              <li>Processing and completing transactions</li>
              <li>Sending you technical notices and support messages</li>
              <li>Responding to your comments, questions, and requests</li>
              <li>
                Monitoring and analyzing trends, usage, and activities in
                connection with the App
              </li>
              <li>
                Detecting, investigating, and preventing fraudulent transactions
                and other illegal activities
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 font-[family-name:var(--font-heading)]">
              4. Firebase Services
            </h2>
            <p>
              The App uses Google Firebase for various services. These services
              process personal data according to Google&apos;s privacy policy.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 font-[family-name:var(--font-heading)]">
              4.1 Firebase Authentication
            </h3>
            <p>
              We use Firebase Authentication to manage user accounts securely.
              Firebase Authentication collects and processes certain
              authentication data, such as your email address. This information
              is stored on Google&apos;s servers and is subject to Google&apos;s privacy
              practices.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 font-[family-name:var(--font-heading)]">
              4.2 Firebase Firestore
            </h3>
            <p>
              We use Firebase Firestore to store and sync user data, including
              workout information. All data stored in Firestore is subject to
              Google&apos;s security measures and privacy policies.
            </p>
            <p>
              For more information about Firebase&apos;s privacy practices, please
              visit Google&apos;s Privacy Policy at{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-[#286A48]"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/privacy
              </a>
              .
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 font-[family-name:var(--font-heading)]">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect the security of your personal information. However, please
              be aware that no method of transmission over the internet or
              electronic storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 font-[family-name:var(--font-heading)]">
              6. Data Retention
            </h2>
            <p>
              We will retain your personal information only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              also retain and use your information to the extent necessary to
              comply with our legal obligations, resolve disputes, and enforce
              our policies.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 font-[family-name:var(--font-heading)]">
              7. Your Rights
            </h2>
            <p>
              You have certain rights regarding your personal information,
              including:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>
                The right to access the personal information we have about you
              </li>
              <li>
                The right to request correction or deletion of your personal
                information
              </li>
              <li>
                The right to object to or restrict certain processing of your
                data
              </li>
              <li>The right to data portability</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information
              provided in the &quot;Contact Us&quot; section.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 font-[family-name:var(--font-heading)]">
              8. Children&apos;s Privacy
            </h2>
            <p>
              The App is not intended for children under the age of 13. We do
              not knowingly collect personal information from children under 13.
              If you are a parent or guardian and believe your child has
              provided us with personal information, please contact us
              immediately.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 font-[family-name:var(--font-heading)]">
              9. Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last updated&quot; date. You are advised to review
              this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 font-[family-name:var(--font-heading)]">
              10. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at info@elder-software.com.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} FitTick. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link href="/" className="text-gray-400 hover:text-white">
              Home
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
