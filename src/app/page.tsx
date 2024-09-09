import Header from "@/components/header/header";
import Banner from "@/components/banner/banner";
import Head from "next/head";
import Footer from "@/components/footer/footer";
import CategoryCard from "@/components/category-card/categoryCard";
import Product from "@/components/product/product";
export default function Home() {
  return (
    <main className="container">
      <Header />
      <Banner />
      <CategoryCard />
      <Product />
      <Footer />
    </main>
  );
}
