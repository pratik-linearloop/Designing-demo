import Image from "next/image";
import React from "react";
import RightArrowComponent from "../theme/icons/rightArrowComponent";

const Customers = () => {
  return (
    <div className="bg-natural-Silver my-12 py-8">
      <div className="container flex flex-wrap items-center">
        <div className="w-full md:w-6/12 lg:w-1/3">
          <Image
            src="/images/image 9.png"
            width={326}
            height={326}
            alt="customer"
          />
        </div>
        <div className="w-full md:w-6/12 lg:w-8/12">
          <p className="text-base font-medium text-natural-grey">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h4 className="text-xl font-semibold text-Primary mt-4">Tim Smith</h4>
          <p className="text-base text-natural-L_Grey mt-2">
            British Dragon Boat Racing Association
          </p>
          <div className="mt-8 flex flex-wrap gap-8">
            <div className="flex gap-6 xl:gap-10">
              <Image
                src="/images/our-clients-images/Logo (1).svg"
                width={48}
                height={48}
                alt="customer-logo"
              />
              <Image
                src="/images/our-clients-images/Logo (2).svg"
                width={48}
                height={48}
                alt="customer-logo"
              />
              <Image
                src="/images/our-clients-images/Logo (3).svg"
                width={48}
                height={48}
                alt="customer-logo"
              />
              <Image
                src="/images/our-clients-images/Logo (4).svg"
                width={48}
                height={48}
                alt="customer-logo"
              />
              <Image
                src="/images/our-clients-images/Logo (5).svg"
                width={48}
                height={48}
                alt="customer-logo"
              />
              <Image
                src="/images/our-clients-images/Logo (6).svg"
                width={48}
                height={48}
                alt="customer-logo"
                className="hidden lg:block"
              />
            </div>
            <div className="flex items-center gap-3">
              <p className="text-xl font-semibold text-Primary">
                Meet all customers
              </p>
              <RightArrowComponent className="text-Primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
