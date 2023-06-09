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
        heading="Get Started with Cold Connect"
        msg="WGet ready to be hired with your own will with the power of cold emailing"
      />
      <Step
        imgSrc={Img2}
        hcolor="text-[#DBFF00]"
        tcolor={props.tcolor2}
        heading="Login or Signup"
        msg="Create a account to access our services"
      />
      <Step
        imgSrc={Img3}
        hcolor="text-[#21ECFC]"
        tcolor={props.tcolor3}
        heading="Generate New Resume"
        msg="Generate a new resume that could be downloaded as a pdf file"
      />
      <Step
        imgSrc={Img4}
        hcolor="text-[#FF959F]"
        tcolor={props.tcolor4}
        heading="Add Job Description"
        msg="For a given job , provide us with a proper job description that would allow us to generate a better mail"
      />
    </div>
    // </div>
  );
}
