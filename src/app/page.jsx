import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-amber-300 text-[50px] ">Home Page</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact US</Link></li>
        <li><Link href="/about/branches">Branches</Link></li>
        <li><Link href="/products/vegi">Vegis Page</Link></li>


      </ul>
    </>
  );
}
