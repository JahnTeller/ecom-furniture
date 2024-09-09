import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="space-x-18 w-screen flex-col items-center justify-center border-t-2 pt-4">
      <div className="m-16 grid grid-cols-4 border-b-2 pb-16">
        <div className="space-y-4 pr-20">
          <div>Furniture</div>
          <p className="text-[#9F9F9F]">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <ul className="space-y-10">
          <div className="text-[#9F9F9F]">Links</div>
          <li>
            <Link href="/#">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="space-y-10">
          <div className="text-[#9F9F9F]">Help</div>
          <li>
            <Link href="/payment-option">Payment Option</Link>
          </li>
          <li>
            <Link href="/#">Return</Link>
          </li>
          <li>
            <Link href="/privacy-policies">Privacy Policies</Link>
          </li>
        </ul>
        <div className="space-y-10">
          <div className="text-[#9F9F9F]">New Letter</div>
          <div className="flex gap-4">
            <input
              type="email"
              className="border-b-2 border-b-black"
              placeholder="Enter Email Here!"
            ></input>
            <button className="border-b-2 border-b-black font-bold">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <p className="m-16">
        © Copyright © 2024 Furniture. All rights reverved
      </p>
    </div>
  );
}
