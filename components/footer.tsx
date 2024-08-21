import Image from "next/image";
import React from "react";
import SendIcon from "./theme/icons/sendIcon";
import InstaIcon from "./theme/icons/instaIcon";
import BrowserIcon from "./theme/icons/browserIcon";
import TwitterIcon from "./theme/icons/twitterIcon";
import YoutubeIcon from "./theme/icons/youtubeIcon";

const Footer = () => {
  return (
    <div className="bg-natural-black py-16">
      <div className="container flex flex-wrap lg:flex-nowrap gap-5">
        <div className="w-2/5">
          <div className="flex gap-2 items-center">
            <Image
              src="/images/footer-logo.svg"
              width={35}
              height={24}
              alt=""
            />
            <h2 className="text-white text-2xl font-bold">Nexcent</h2>
          </div>
          <div className="py-10">
            <p className="text-sm text-natural-Silver">
              Copyright © 2020 Nexcent ltd.
            </p>
            <p className="text-sm text-natural-Silver mt-2">
              All rights reserved
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bg-natural-D_Grey w-8 h-8 rounded-full flex justify-center items-center">
              <InstaIcon />
            </div>
            <div className="bg-natural-D_Grey w-8 h-8 rounded-full flex justify-center items-center">
              <BrowserIcon />
            </div>
            <div className="bg-natural-D_Grey w-8 h-8 rounded-full flex justify-center items-center">
              <TwitterIcon />
            </div>
            <div className="bg-natural-D_Grey w-8 h-8 rounded-full flex justify-center items-center">
              <YoutubeIcon />
            </div>
          </div>
        </div>
        <div className="w-auto xl:w-3/5 flex flex-wrap lg:flex-nowrap gap-24">
          <div>
            <h3 className="text-white text-xl font-semibold">Company</h3>
            <div className="text-natural-Silver text-sm mt-6 flex flex-col gap-y-3">
              <p>About us</p>
              <p>Blog</p>
              <p>Contact us</p>
              <p>Pricing</p>
              <p>Testimonials</p>
            </div>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold">Support</h3>
            <div className="text-natural-Silver text-sm mt-6 flex flex-col gap-y-3">
              <p>Help center</p>
              <p>Terms of service</p>
              <p>Legal</p>
              <p>Privacy policy</p>
              <p>Status</p>
            </div>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold">
              Stay up to date
            </h3>
            <div className="mt-6 relative">
              <input
                type="text"
                placeholder="Your email address"
                className="h-10 w-[255px] pl-3 pr-10 text-white rounded-md bg-natural-D_Grey"
              />
              <SendIcon className="absolute top-3 right-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
