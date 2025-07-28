

import Image from "next/image";
import ContentSection from "./ContentSection";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full bg-black text-white">
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-no-repeat bg-fixed z-0"
        style={{
          backgroundImage: "url('/images/coming-soon.png')",
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
        }}
      />

      
      <div
        className="absolute top-[40%] left-0 w-full min-h-screen h-[1400px] z-10 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(180deg, #4A1D00 -4.88%, #000000 100%)",
          clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0% 100%)",
        }}
      />
      <div className="relative z-20 w-full px-8 sm:px-16 py-6 flex items-center justify-between">
        <Image
          src="/images/soon-logo.png"
          alt="Logo"
          width={80}
          height={60}
          className="object-contain h-[55px] w-[55px] md:h-[75px] md:w-[75px]"
        />
        <div className="flex space-x-8 items-center">
          <Link href="https://x.com/Dream_Stream_23" target="_blank">
            <Image
              src="/images/Vector.png"
              alt="X"
              width={18}
              height={16}
              className="hover:brightness-125 transition"
            />
          </Link>
          <Link href="https://www.tiktok.com/@dreamstream_magic" target="_blank">
            <Image
              src="/images/tiktok.png"
              alt="TikTok"
              width={18}
              height={16}
              className="hover:brightness-125 transition"
            />
          </Link>
          <Link href="https://www.facebook.com/people/DreamStream/61574869603363/" target="_blank">
            <Image
              src="/images/fb.png"
              alt="Facebook"
              width={18}
              height={16}
              className="hover:brightness-125 transition"
            />
          </Link>
          <Link href="https://www.instagram.com/dreamstream_magic_in_motion/" target="_blank">
            <Image
              src="/images/insta.png"
              alt="Instagram"
              width={18}
              height={16}
              className="hover:brightness-125 transition"
            />
          </Link>
        </div>
      </div>
      <div className="relative z-20 mt-[40vh]">
        <ContentSection />
      </div>
    </main>
  );
}
