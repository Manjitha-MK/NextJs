import React from "react";
import Link from "next/link";

function page() {
  const vegitable = [
    {
      id: 1,
      name: "Broccoli",
    },
    {
      id: 2,
      name: "Spinach",
    },
    {
      id: 3,
      name: "Carrot",
    },
    {
      id : 4,
      name : "Potato"
    }
  ];

  return (
    <div>
      <h1>Vegi Items page</h1>

      <ul>
        {vegitable.map((vegi, index) => {
          return (
            <li key={index}>
              <Link href={`/products/vegi/${vegi.name}`}>{vegi.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default page;
