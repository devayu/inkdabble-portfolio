"use client";
import React from "react";

type BackgroundWrapperProps = {
  children: React.ReactNode;
};
const BackgroundWrapper = ({ children }: BackgroundWrapperProps) => {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/bg1.jpg')`,
          backgroundSize: "cover",
          opacity: "0.5",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
