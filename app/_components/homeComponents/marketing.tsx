import Image from "next/image";
import React from "react";
import RightArrowComponent from "../theme/icons/rightArrowComponent";

const Marketing = () => {
  return (
    <div className="container mb-28">
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-natural-D_Grey">
          Caring is the new marketing
        </h2>
        <p className="text-base text-natural-grey mt-2 w-auto lg:w-[628px] mx-auto">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who joining the community, read about
          how our community are increasing their membership income and lot
          more.​
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 md:gap-10 md:gap-y-24 xl:gap-0 mt-4">
        <div className="relative">
          <Image
            src="/images/image 18.png"
            width={368}
            height={286}
            alt="image1"
            className="w-full"
          />
          <div className="bg-natural-Silver p-4 absolute text-center mx-6 -bottom-16 rounded-md shadow-shadow2">
            <p className="text-xl font-semibold text-natural-grey">
              Creating Streamlined Safeguarding Processes with OneRen
            </p>
            <div className="flex justify-center items-center gap-3 mt-4">
              <p className="text-xl font-semibold text-Primary">Read more</p>
              <RightArrowComponent className="text-Primary" />
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/image 19.png"
            width={368}
            height={286}
            alt="image1"
            className="w-full"
          />
          <div className="bg-natural-Silver p-4 absolute text-center mx-6 -bottom-16 rounded-md shadow-shadow2">
            <p className="text-xl font-semibold text-natural-grey">
              What are your safeguarding responsibilities and how can you manage
              them?
            </p>
            <div className="flex justify-center items-center gap-3 mt-4">
              <p className="text-xl font-semibold text-Primary">Read more</p>
              <RightArrowComponent className="text-Primary" />
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/image 20.png"
            width={368}
            height={286}
            alt="image1"
            className="w-full"
          />
          <div className="bg-natural-Silver p-4 absolute text-center mx-6 -bottom-16 rounded-md shadow-shadow2">
            <p className="text-xl font-semibold text-natural-grey">
              Revamping the Membership Model with Triathlon Australia
            </p>
            <div className="flex justify-center items-center gap-3 mt-4">
              <p className="text-xl font-semibold text-Primary">Read more</p>
              <RightArrowComponent className="text-Primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
