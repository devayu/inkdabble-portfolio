"use client";
import Image from "next/image";
import React from "react";
import bg2 from "../../../public/bg2.jpg";

type BackgroundWrapperProps = {
  children: React.ReactNode;
};
const BackgroundWrapper = ({ children }: BackgroundWrapperProps) => {
  return (
    <div className="relative min-h-screen">
      <Image
        src={bg2}
        alt="background image"
        fill
        placeholder="blur"
        sizes="100vw"
        style={{ objectFit: "cover", opacity: "0.2" }}
      ></Image>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
