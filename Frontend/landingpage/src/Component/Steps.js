import React from "react";
import Step from "./Step";
import Img1 from "../Figma/Group1.png";
import Img2 from "../Figma/Group2.png";
import Img3 from "../Figma/Group3.png";
import Img4 from "../Figma/Group4.png";

export default function Steps(props) {
  return (
    // <div className={"h-screen bg-[#6671CF]"}>
    //   <h1 className={"text-center text-2xl text-white py-8"}>
    //     Let's first Generate your perfect email !!
    //   </h1>
    <div className={"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"}>
      <Step
        imgSrc={Img1}
        hcolor="text-[#21E492]"
        tcolor={props.tcolor1}
        heading="Build Resume"
        msg="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      />
      <Step
        imgSrc={Img2}
        hcolor="text-[#DBFF00]"
        tcolor={props.tcolor2}
        heading="Generate Cold Email"
        msg="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      />
      <Step
        imgSrc={Img3}
        hcolor="text-[#21ECFC]"
        tcolor={props.tcolor3}
        heading="List Top Companies"
        msg="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      />
      <Step
        imgSrc={Img4}
        hcolor="text-[#FF959F]"
        tcolor={props.tcolor4}
        heading="Job Search"
        msg="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      />
    </div>
    // </div>
  );
}
