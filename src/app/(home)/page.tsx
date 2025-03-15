import Image from "next/image";
import React from "react";
export default function page() {
  return (
    <>
      <div className="p-4 flex items-center gap-1">
        <Image src="/logo.svg" height={50} width={50} alt="Youtube Logo" />
        <p className="text-2xl font-bold tracking-tight">YouTube</p>
      </div>
    </>
  );
}
