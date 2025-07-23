// import Image from "next/image";
// import CountdownTimer from "./CountDown";
// import ContentSection from "./ContentSection";
// import { FaXTwitter } from "react-icons/fa6";
// import { Twitter, Youtube, Instagram, X } from "lucide-react";
// import { SiTiktok, SiThreads } from "react-icons/si"; // from react-icons for TikTok and Threads
// import Link from "next/link";
// export default function Home() {
//   return (
//     <main className="relative w-full overflow-visible bg-black flex flex-col items-center justify-center">
      
//       <div
//         className="relative w-full min-h-screen h-[1000px] bg-cover  bg-no-repeat z-0"
//         style={{
//           backgroundImage: "url('/images/coming-soon.png')",
//           clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
//         }}
//       >
     
//         <div className="flex items-center justify-between w-full px-8 sm:px-16 py-6 z-10 relative">
     
//           <Image
//             src="/images/soon-logo.png"
//             alt="Logo"
//             width={80}
//             height={60}
//             className="object-contain h-[55px] w-[55px] md:h-[75px] md:w-[75px]"
//           />
//           <div className="flex space-x-4 items-center">
//             <Link href="https://x.com/Dream_Stream_23" target="_blank">
//               <Image
//                 src="/images/Vector.png"
//                 alt="X"
//                 width={18}
//                 height={16}
//                 className="hover:brightness-125 transition"
//               />
//             </Link>
//             <Link href="https://www.tiktok.com/@dreamstream_magic" target="_blank">
//               <Image
//                 src="/images/fi_3046120.png"
//                 alt="TikTok"
//                 width={18}
//                 height={16}
//                 className="hover:brightness-125 transition"
//               />
//             </Link>
//             <Link href="https://youtube.com" target="_blank">
//               <Image
//                 src="/images/utube.png"
//                 alt="YouTube"
//                  width={18}
//                 height={16}
//                 className="hover:brightness-125 transition"
//               />
//             </Link>
//             <Link href="https://www.threads.net" target="_blank">
//               <Image
//                 src="/images/thread.png"
//                 alt="Threads"
//                   width={18}
//                 height={16}
//                 className="hover:brightness-125 transition"
//               />
//             </Link>
//             <Link href="https://www.instagram.com/dreamstream_magic_in_motion/" target="_blank">
//               <Image
//                 src="/images/Group 60.png"
//                 alt="Instagram"
//                   width={18}
//                 height={16}
//                 className="hover:brightness-125 transition"
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="absolute top-[80%] 2xl:top-[70%] left-0 w-full  lg:h-[966px] z-30 pointer-events-none overflow-visible">
//         <div
//           className="w-full min-h-screen lg:h-[966px] 2xl:h-[1250px] bg-cover bg-no-repeat pointer-events-auto "
//           style={{
//             backgroundImage: "url('/images/vector-1.png')",
//             backgroundPosition: "top center",
//             clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0% 100%)",
//           }}
//         >
          
//         </div>
//       </div>
//       <div className="absolute top-[20%] lg:top-[50%] z-100">
//         <ContentSection />
//       </div>
//     </main>
//   );
// }
/* Vector 1 */





// import Image from "next/image";
// import ContentSection from "./ContentSection";
// import Link from "next/link";
// export default function Home() {
//   return (
//     <main className="relative w-full overflow-visible bg-black flex flex-col items-center justify-center">
//       {/* First Background with Countdown */}
//       <div
//         className="relative w-full min-h-screen h-[1000px] bg-cover  bg-no-repeat z-0"
//         style={{
//           backgroundImage: "url('/images/coming-soon.png')",
//           clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
//         }}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between w-full px-8 sm:px-16 py-6 z-10 relative">
     
//           <Image
//             src="/images/soon-logo.png"
//             alt="Logo"
//             width={80}
//             height={60}
//             className="object-contain h-[55px] w-[55px] md:h-[75px] md:w-[75px]"
//           />
//           <div className="flex space-x-7 items-center">
//             <Link href="https://x.com/Dream_Stream_23" target="_blank">
//               <Image
//                 src="/images/Vector.png"
//                 alt="X"
//                 width={18}
//                 height={16}
//                 className="hover:brightness-125 transition"
//               />
//             </Link>
//             <Link href="https://www.tiktok.com/@dreamstream_magic" target="_blank">
//               <Image
//                 src="/images/tiktok.png"
//                 alt="TikTok"
//                 width={18}
//                 height={16}
//                 className="hover:brightness-125 transition"
//               />
//             </Link>
//             {/* <Link href="https://youtube.com" target="_blank"> */}
//               {/* <Image
//                 src="/images/utube.png"
//                 alt="YouTube"
//                  width={18}
//                 height={16}
//                 className="hover:brightness-125 transition"
//               /> */}
              
//             {/* </Link> */}
//             <Link href="https://www.facebook.com/people/DreamStream/61574869603363/" target="_blank">
//               <Image
//                 src="/images/fb.png"
//                 alt="facbook"
//                   width={18}
//                 height={16}
//                 className="hover:brightness-125 transition"
//               />
//               {/* <LiaFacebookF className="h-10 w-6" /> */}
           
//             </Link>
//             <Link href="https://www.instagram.com/dreamstream_magic_in_motion/" target="_blank">
//               <Image
//                 src="/images/insta.png"
//                 alt="Instagram"
//                   width={18}
//                 height={16}
//                 className="hover:brightness-125 transition"
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="absolute top-[80%] 2xl:top-[70%] left-0 w-full lg:h-[966px] z-30 pointer-events-none overflow-visible">
//   <div
//     className="w-full min-h-screen lg:h-[966px] 2xl:h-[1250px] pointer-events-auto"
//     style={{
//       backgroundImage: "linear-gradient(180deg, #4A1D00 -4.88%, #000000 100%)",
//       clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0% 100%)",
//     }}
//   ></div>
// </div>

//       <div className="absolute top-[20%] lg:top-[50%] z-100">
//         <ContentSection />
//       </div>
//     </main>
//   );
// }

import Image from "next/image";
import ContentSection from "./ContentSection";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full bg-black text-white">
      {/* Fixed Background Image */}
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-no-repeat bg-fixed z-0"
        style={{
          backgroundImage: "url('/images/coming-soon.png')",
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
        }}
      />

      {/* Gradient overlay over the background */}
      <div
        className="absolute top-[40%] left-0 w-full min-h-screen h-[1200px] z-10 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(180deg, #4A1D00 -4.88%, #000000 100%)",
          clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0% 100%)",
        }}
      />

      {/* Header */}
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

      {/* Content section starts after 40% of screen */}
      <div className="relative z-20 mt-[40vh]">
        <ContentSection />
      </div>
    </main>
  );
}
