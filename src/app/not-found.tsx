import Header from "@/components/header/header";
import React from "react";

type Props = {};

export default function NotFound() {
  return (
    <div>
      <Header />
      <div className="relative flex h-screen -translate-y-10 items-center justify-center text-2xl font-bold">
        Page Not Found
      </div>
    </div>
  );
}
