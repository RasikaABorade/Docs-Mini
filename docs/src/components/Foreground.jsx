import React, { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null); //we dont want ki hamara drag foreground ke bahar jaye

  const data = [
    {
      desc: "Hello, this is the data that we wanted",
      filesize: ".9mb",
      close: true, //agar hum false kare toh we'll se the download icon
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Hello, this is the data that we wanted",
      filesize: ".9mb",
      close: true, //agar hum false kare toh we'll se the download icon
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Hello, this is the data that we wanted",
      filesize: ".9mb",
      close: true, //agar hum false kare toh we'll se the download icon
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
