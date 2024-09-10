import React from "react";
import ProductCard from "./productCard";
import Link from "next/link";
import Product from "@/components/product/product";

const newProduct = {
  image: "/product.png",
  name: "Smartphone",
  price: 999.99,
  detail: "30% off",
  category: "Electronics",
  description:
    "This smartphone features a high-resolution camera, long-lasting battery, and fast charging capabilities.",
};

export default function product() {
  return (
    <div className="mb-10 flex w-screen flex-col items-center justify-center">
      <div className="py-8 text-[2.25rem] font-extrabold">Our Product</div>
      <div className="flex flex-col items-center justify-center space-y-5">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          <ProductCard {...newProduct} />
          <ProductCard {...newProduct} />
          <ProductCard {...newProduct} />
          <ProductCard {...newProduct} />
          <ProductCard {...newProduct} />
          <ProductCard {...newProduct} />
          <ProductCard {...newProduct} />
          <ProductCard {...newProduct} />
        </div>
        <button className="border-2 border-[#B88E2F] px-[5rem] py-[1rem] font-semibold text-[#B88E2F]">
          Show More
        </button>
      </div>
    </div>
  );
}
