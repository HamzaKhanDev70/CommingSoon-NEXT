"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import React, { useState } from "react";
import CountdownTimer from "./CountDown";
const ContentSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!emailRegex.test(email)) {
    setErrorMsg("Please enter a valid email address.");
    return;
  }
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    const payload = {
      to: email,
      subject: "You're on the list – DreamStream is coming soon!",
      body: `<p> Thanks for joining us on this exciting journey.<br/><br/>
    We’re thrilled to welcome you to <strong>DreamStream – Magic in Motion</strong>.<br/><br/>
    We’re bringing you a next-generation platform that transforms your travel experience with:
    <ul>
      <li>Seamless entertainment across buses, trains, ferries, and flights</li>
      <li>Entertainment you’ll love</li>
    </ul>
    Our mission is to keep you connected and entertained, no matter where your journey takes you.<br/><br/>
    Thanks for being a part of the future of travel.<br/>
    <br/>
    Stay tuned,<br/>
    <strong>The DreamStream Team</strong>
  </p>
`,
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to send email");
      const data = await res.json();
      setSuccessMsg("Email sent successfully ");
      setEmail("");
    } catch (err: any) {
      console.error(err);
      setErrorMsg("Something went wrong ");
    } finally {
      setLoading(false);
    }
  };

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
      <div className="max-w-7xl mx-auto px-8 md:px-7 flex flex-col items-center justify-center ">
        <h1 className="heading-hero text-white mb-6 md:mb-10 ">
          <span className="text-[#FEE300]">coming soon</span>
          <br className="md:hidden" />
          <span className="text-pink-500"> exclusively for you.</span>
        </h1>
        <p className="paragraph-hero mb-8 leading-relaxed">
          Welcome to DreamStream{" "}
          <span className="text-blue-700 ">Magic in Motion</span>
        </p>
        <p className="paragraph-hero mb-8 leading-relaxed">
          Get ready to experience seamless entertainment and essential services
          like never before. DreamStream is a next-generation platform designed
          for passengers across various modes of transport. Whether you're
          traveling by bus, train, ferry, or plane, DreamStream offers easy
          access to entertainment, real-time information, and essential
          services.
        </p>
        <p className="text-[#FEE300] paragraph-hero mb-8 leading-relaxed">
          Stay connected and enjoy a passenger-centric experience that puts
          freedom of choice at your fingertips – even when you’re offline.
        </p>
        <CountdownTimer />

        <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-4 py-2"
    >
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
          required
          className="bg-gray-700 outline-none pl-10 pr-4 py-3 text-sm text-white placeholder-gray-400 w-64 rounded-lg"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-3 text-sm hover:bg-blue-700 transition rounded-lg"
      >
        {loading ? "Sending..." : "Keep me updated"}
      </button>
    </form>
        {successMsg && (
          <p className="text-yellow-400 text-sm mt-2  ">{successMsg}</p>
        )}
        {errorMsg && <p className="text-red-400 text-sm mt-2">{errorMsg}</p>}
      </div>
    </div>
  );
};
export default ContentSection;
