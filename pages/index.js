import Image from "next/image";
import { Inter, Oswald } from "next/font/google";
import Link from "next/link";

const calc = "/gtocalc.jpg";
const howToUse = "/howto.jpg";
const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });

export default function Home() {
  return (      
      <main className="flex min-h-screen flex-col items-center justify-center space-y-24 p-14 py-32 bg-[url(/bg.jpg)] bg-cover bg-center">
        <header className="backdrop-blur-xl p-10 border-neutral-300 rounded-lg shadow-md shadow-neutral-800">
          <h1 className={`text-black ${oswald.className} text-4xl`}>
            Welcome to SimCity BuildIt resource calculator!
          </h1>
        </header>
        <section className="flex justify-evenly w-full">
          <Link
            href={"/calculator"}
            className="text-center transition-all transform-gpu hover:scale-110"
          >
            <p
              className={`${inter.className} p-4 backdrop-blur-md text-xl font-semibold text-slate-800 rounded-lg max-w-fit m-auto mb-2`}
            >
              {" "}
              Go to Calculator{" "}
            </p>
            <Image
              className="rounded-lg"
              alt="go-to-calc"
              src={calc}
              height={250}
              width={250}
            />
          </Link>

          <Link
            href={"/how-to-use"}
            className="text-center transition-all transform-gpu hover:scale-110"
          >
            <p
              className={`${inter.className} p-4 backdrop-blur-md text-xl font-semibold text-slate-800 rounded-lg max-w-fit m-auto mb-2`}
            >
              {" "}
              How to Use It{" "}
            </p>
            <Image
              className="rounded-lg"
              alt="go-to-calc"
              src={howToUse}
              height={250}
              width={250}
            />
          </Link>
        </section>
      </main>
  );
}
