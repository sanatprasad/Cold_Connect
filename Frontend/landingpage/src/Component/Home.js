import React from "react";
import BigStep from "./BigStep";
import textImg from "../Figma/textim.png";

export default function Home() {
  return (
    <>
      <BigStep
        bg="bg-[#6671CF]"
        tstyle="text-center text-2xl text-white py-8"
        tcontent="Let's first Generate your perfect email !!"
        tcolor1="text-[#BDF8DF]"
        tcolor2="text-[#F6FBC3]"
        tcolor3="text-[#C7F5F9]"
        tcolor4="text-[#F8DCDC]"
        text="Let's first Generate your perfect email !!"
      />
      <BigStep
        bg="bg-[#FFF8FD]"
        tstyle="text-center text-2xl text-black py-8"
        tcontent="Let's first Generate your perfect email !!"
        tcolor1="text-[#3A735B]"
        tcolor2="text-[#BBC917]"
        tcolor3="text-[#25B9C5]"
        tcolor4="text-[#B53434]"
        textImg={textImg}
      />
    </>
  );
}
