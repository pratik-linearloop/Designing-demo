import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="bg-[#F5F7FA]">
      <div className="container h-[84px] flex items-center justify-between">
        <div className="flex gap-1 items-center">
          <Image src="/images/logo.svg" width={35} height={24} alt="" />
          <h2 className="text-Secondary text-2xl font-bold">Nexcent</h2>
        </div>
        <div className="flex gap-10 text-base font-medium">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Service</p>
          <p className="cursor-pointer">Feature</p>
          <p className="cursor-pointer">Product</p>
          <p className="cursor-pointer">Testimonial</p>
          <p className="cursor-pointer">FAQ</p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-transparent text-Primary hover:bg-Primary hover:text-white">
            Login
          </Button>
          <Button className="bg-transparent text-Primary hover:bg-Primary hover:text-white">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
