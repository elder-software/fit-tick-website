import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 font-[family-name:var(--font-heading)]">
            Terms of Service
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
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, or using the FitTick application
              (&quot;App&quot;), you agree to be bound by these Terms of Service
              (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 font-[family-name:var(--font-heading)]">
              2. Description of Service
            </h2>
            <p>
              FitTick is a fitness tracking application that allows users to
              track workouts, set goals, and monitor fitness progress. The App
              uses Firebase services for authentication and data storage.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 font-[family-name:var(--font-heading)]">
              3. User Accounts
            </h2>
            <p>
              To use certain features of the App, you must create a user
              account. When creating an account, you agree to provide accurate,
              current, and complete information. You are responsible for
              maintaining the confidentiality of your account credentials and
              for all activities that occur under your account.
            </p>
            <p>
              FitTick uses Firebase Authentication to securely manage user
              accounts. By creating an account, you consent to the processing of
              your authentication data in accordance with our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 font-[family-name:var(--font-heading)]">
              4. Data Storage and Usage
            </h2>
            <p>
              The App uses Firebase Firestore to store and sync user data,
              including workout information, personal goals, and progress
              metrics. All data is stored in accordance with our Privacy Policy
              and Firebase&apos;s security practices.
            </p>
            <p>
              You retain ownership of any data you input into the App. By using
              the App, you grant FitTick a license to use, store, and process
              your data solely for the purpose of providing and improving the
              service.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 font-[family-name:var(--font-heading)]">
              5. User Content
            </h2>
            <p>
              You are solely responsible for any content you create, upload, or
              share through the App. You agree not to post content that:
            </p>
            <ul className="list-disc pl-6 my-4">
              <li>Violates any applicable law or regulation</li>
              <li>Infringes on the rights of others</li>
              <li>Is harmful, abusive, or otherwise objectionable</li>
              <li>Contains malware, viruses, or other malicious code</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 font-[family-name:var(--font-heading)]">
              6. Intellectual Property
            </h2>
            <p>
              The App, including all content, features, and functionality, is
              owned by FitTick and is protected by copyright, trademark, and
              other intellectual property laws. You may not reproduce,
              distribute, modify, create derivative works of, publicly display,
              or otherwise use any portion of the App without explicit
              permission.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 font-[family-name:var(--font-heading)]">
              7. Limitation of Liability
            </h2>
            <p>
              The App is provided &quot;as is&quot; without warranties of any kind.
              FitTick disclaims all warranties, express or implied, including
              but not limited to fitness for a particular purpose and
              non-infringement.
            </p>
            <p>
              FitTick shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from your use or
              inability to use the App.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 font-[family-name:var(--font-heading)]">
              8. Third-Party Services
            </h2>
            <p>
              The App uses third-party services, including Firebase, which are
              subject to their own terms and privacy policies. By using the App,
              you also agree to the terms of these third-party services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 font-[family-name:var(--font-heading)]">
              9. Termination
            </h2>
            <p>
              FitTick reserves the right to terminate or suspend your account
              and access to the App at any time for violation of these Terms or
              for any other reason at our sole discretion.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 font-[family-name:var(--font-heading)]">
              10. Changes to Terms
            </h2>
            <p>
              FitTick may modify these Terms at any time. We will notify users
              of significant changes through the App or by email. Your continued
              use of the App after such modifications constitutes your
              acceptance of the updated Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 font-[family-name:var(--font-heading)]">
              11. Contact Information
            </h2>
            <p>
              If you have any questions or concerns about these Terms, please
              contact us at support@fittick.com.
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
            <Link href="/privacy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
