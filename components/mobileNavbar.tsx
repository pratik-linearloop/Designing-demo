import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import React from "react";

const MobileHeader = () => {
  return (
    <div className="bg-[#F5F7FA]">
      <div className="container h-16 flex items-center justify-between px-4">
        <div className="flex gap-1 items-center">
          <Image src="/images/logo.svg" width={35} height={24} alt="" />
          <h2 className="text-Secondary text-2xl font-bold">Nexcent</h2>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Image
              src="/images/hamburger-menu.svg"
              width={35}
              height={24}
              alt=""
            />
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-5 text-base font-medium mt-2">
              <p className="cursor-pointer">Home</p>
              <p className="cursor-pointer">Service</p>
              <p className="cursor-pointer">Feature</p>
              <p className="cursor-pointer">Product</p>
              <p className="cursor-pointer">Testimonial</p>
              <p className="cursor-pointer">FAQ</p>
            </div>
            <div className="flex gap-2 mt-5">
              <Button className="bg-Primary text-white hover:bg-transparent hover:text-Primary hover:border hover:border-Primary">
                Login
              </Button>
              <Button className="bg-Primary text-white hover:bg-transparent hover:text-Primary hover:border hover:border-Primary">
                Sign Up
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileHeader;
