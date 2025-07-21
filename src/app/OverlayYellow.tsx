import Image from "next/image";
import { Mail } from "lucide-react";
import React from "react";
import CountdownTimer from "./CountDown";
const OverlayYellow = () => {
  return (
    <div className=" w-full  px-4  relative z-10">
      <div className="relative top-[10%] xl:top-[5%] left-[15%] w-[70vw] max-w-[1600px] aspect-[3/2] z-10 pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/yellow-rect.png"
            alt="Yellow background"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 80vw, 40vw"
            priority
          />
        </div>
        <div className="absolute top-[48%] left-[6%] -translate-y-1/2 z-10 w-[80%] max-w-[1200px] aspect-[3/2]">
          <div className="relative w-full h-full">
            <Image
              src="/images/soon-listen.png"
              alt="Coming soon text"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 60vw, 30vw"
            />
          </div>
        </div>

      </div>
    </div>
  );
};
export default OverlayYellow;
