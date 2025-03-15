import Image from "next/image";
import Link from "next/link";
import img1 from "../../public/elephant.jpg";

export default function Home() {
  return (
    <>
      <h1 className="text-amber-300 text-[50px] ">Home Page</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact US</Link>
        </li>
        <li>
          <Link href="/about/branches">Branches</Link>
        </li>
        <li>
          <Link href="/products/vegi">Vegis Page</Link>
        </li>
      </ul>
      <div>
        <Image src={img1} alt="Elephant image" className="w-full"/>
      </div>
      <div>
        <Image className="w-full h-full" src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg" alt="Road image" width={500} height={300}/>
      </div>
    </>
  );
}
