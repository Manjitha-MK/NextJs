"use client";
import React, { useState } from "react";

function page() {
  const [inputText, setInputText] = useState();

  const handleClick = (p1) => {
    alert(p1);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <div>
        <h1>Event Handling, Creating Function & Managing States</h1>
        <input
          type="text"
          onChange={handleChange}
          className="bg-white text-black"
        />
        <button onClick={() => handleClick("MK")}>Click here</button>
        <h2>Value is: {inputText}</h2>
      </div>

      {inputText == "MK" &&
      <div>
        <h1>MK</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quod nemo commodi dolorum consequuntur, earum sed ex vero magnam libero quibusdam quidem mollitia. Quam, ut? Dicta sapiente beatae saepe unde.</p>
      </div>}
    </>
  );
}

export default page;
