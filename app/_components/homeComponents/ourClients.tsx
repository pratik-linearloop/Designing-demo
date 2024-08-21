import { OUR_CLIENTS } from "@/lib/constant";
import Image from "next/image";
import React from "react";

const OurClients = () => {
  return (
    <div className="container py-10">
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-natural-D_Grey">
          Our Clients
        </h2>
        <p className="text-base text-natural-D_Grey mt-2">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="mt-4 flex gap-28 animate-[scroll_10s_linear_infinite]">
          {OUR_CLIENTS.map((item, index) => (
            <Image
              key={index}
              src={item.img}
              width={48}
              height={48}
              alt="logo"
            />
          ))}
          {OUR_CLIENTS.map((item, index) => (
            <Image
              key={index}
              src={item.img}
              width={48}
              height={48}
              alt="logo"
            />
          ))}
          {OUR_CLIENTS.map((item, index) => (
            <Image
              key={index}
              src={item.img}
              width={48}
              height={48}
              alt="logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
