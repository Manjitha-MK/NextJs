import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1>Products Page</h1>
      <div>
        <li>
          <Link href="/products/meat">Meats</Link>
        </li>
        <li>
          <Link href="/products/vegi">Vegis</Link>
        </li>
      </div>
    </div>
  );
};

export default page;
