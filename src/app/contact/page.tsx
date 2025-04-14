import Link from "next/link";

export default function Contact() {
  return (
    <main className="flex-grow font-[family-name:var(--font-sans)]">
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center font-[family-name:var(--font-heading)]">
            Contact Us
          </h1>
          <div className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 space-y-6">
            <p>
              If you have any questions, feedback, or concerns, please feel free
              to reach out to us.
            </p>
            <p>
              For inquiries regarding your account, accessing your stored
              information, or requesting deletion of your data, please contact
              us via email. We are committed to protecting your privacy and will
              respond to your requests promptly.
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <Link
                href="mailto:info@elder-software.com"
                className="text-[#286A48] hover:underline"
              >
                info@elder-software.com
              </Link>
            </p>
            {/* You can add more contact methods here if needed, like a contact form or phone number */}
          </div>
        </div>
      </section>
    </main>
  );
}
