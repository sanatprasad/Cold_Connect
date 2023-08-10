import React from "react";
import Steps from "./Steps";

export default function BigStep(props) {
  return (
    <div className={`${props.bg} py-6`}>
      {props.textImg ? (
        <img
          src={props.textImg}
          className={"mb-8 mx-auto md:w-6/12 sm:w-9/12"}
          alt=""
        />
      ) : (
        <h1 className={`${props.tstyle}`}>{props.tcontent}</h1>
      )}
      <Steps
        tcolor1={props.tcolor1}
        tcolor2={props.tcolor2}
        tcolor3={props.tcolor3}
        tcolor4={props.tcolor4}
      />
    </div>
  );
}
