import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Features from "@/components/Features";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-sans)]">
      <main className="flex-grow">
        <section className="relative bg-gradient-to-br from-[#286A48]/10 to-[#266489]/10 py-16 md:py-24">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-[family-name:var(--font-heading)]">
                Your Fitness Journey{" "}
                <span className="text-[#286A48]">Simplified</span>
              </h1>
              <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                Create custom workout plans to help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <a
                  href="#download"
                  className="px-6 py-3 rounded-full bg-[#286A48] text-white font-medium hover:bg-[#1e4e36] transition-colors"
                >
                  Download Now
                </a>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] w-full flex justify-center">
              <div className="absolute w-[258px] h-[560px] bg-[#286A48] rounded-[40px] shadow-xl rotate-6 opacity-20"></div>
              <div className="absolute w-[258px] h-[560px] bg-white dark:bg-gray-800 rounded-[40px] shadow-xl overflow-hidden">
                <Image
                  src="/images/timer.jpg"
                  alt="FitTick app timer screen showing a Calve Stretch exercise"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-[40px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* <Features /> */}

        <section
          id="download"
          className="py-16 bg-gradient-to-br from-[#286A48] to-[#266489] text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-heading)]">
              Start Your Fitness Journey Today
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Download FitTick now and take the first step towards achieving
              your fitness goals. Available on iOS and Android.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a
                href="#"
                className="px-6 py-3 bg-black rounded-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors"
              >
                <span>App Store</span>
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-black rounded-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors"
              >
                <span>Google Play</span>
              </a>
            </div>
            <div className="text-sm">
              <p>
                By downloading, you agree to our{" "}
                <Link href="/terms" className="underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FitTick. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
