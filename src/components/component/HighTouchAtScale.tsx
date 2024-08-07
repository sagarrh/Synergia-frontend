"use client";
import React from "react";
import Link from "next/link";

function HighTouchAtScale() {
  return (
    <div className="bg-custom-gradient-for-about-page ">
      <h1 className="text-5xl text-center font-bold p-20 text-white">High Touch at Scale</h1>
      <div className="flex justify-center items-center pl-16 p-10 gap-5">
        <div className="w-[39%]">
          <img src="images\About2.png" alt="" />
        </div>
        <div className="w-[35%] text-white">
          Shoppers no longer need to scroll through endless product listings,
          read reviews, and compare prices to make the right choice. Now, you
          can provide AI-powered sales advisory to your buyers on every digital
          channel, just like they would expect in a physical store. <br /> <br /> <div className="font-bold">A “white
          glove” experience at internet scale.</div>  Synergia recognizes consumer
          needs, addresses concerns, suggests alternatives, and provides
          recommendations that are just right for their needs. <br /><br />
          <Link className="py-3 px-4 text-white rounded-sm bg-[#4b42eb] text-sm " href={''}>GET STARTED</Link>

        </div>
        <div className="w-[24%] text-center ">
          <img className="h-[350px]" src="images\about3.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HighTouchAtScale;
