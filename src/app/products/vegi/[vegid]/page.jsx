import React from "react";
import Link from "next/link";

export default async function page({ params }) {
  return (
    <div>
      <h1>vegitable item {params.vegid}</h1>
      <Link href="/products/vegi">
        <button className="cursor-pointer">Back to Vegi</button>
      </Link>
    </div>
  );
}
