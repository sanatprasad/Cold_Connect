import React from "react";

export default function Step(props) {
  return (
    <div className={"inline-block p-5 mx-4"}>
      <a href="https://example.com">
      <img className={"ml-16 md:ml-0 pb-4"} src={props.imgSrc} alt=""/>
</a>
      
      
      <h2 className={`${props.hcolor}`}>
        {" "}
        <b>{props.heading}</b>
      </h2>
      <p className={props.tcolor}>{props.msg}</p>
    </div>
  );
}
