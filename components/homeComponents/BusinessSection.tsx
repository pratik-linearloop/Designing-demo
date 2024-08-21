import Image from "next/image";
import React from "react";

const BusinessSection = () => {
  return (
    <div className="bg-natural-Silver my-12">
      <div className="container flex flex-wrap items-center">
        <div className="w-full md:w-1/2 pt-8 md:pt-0">
          <h2 className="text-4xl font-semibold text-natural-D_Grey">
            Helping a local <br />
            <span className="text-Primary">business reinvent itself</span>
          </h2>
          <p className="text-base text-natural-black mt-2">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-wrap md:flex-nowrap gap-7 py-16">
          <div>
            <div className="flex gap-4">
              <Image
                src="/images/local-business-images/Icon.png"
                width={48}
                height={48}
                alt="user"
              />
              <div>
                <h4 className="text-[28px] leading-9 font-bold text-natural-D_Grey">
                  2,245,341
                </h4>
                <p className="text-base text-natural-grey">Members</p>
              </div>
            </div>
            <div className="flex gap-4 mt-10">
              <Image
                src="/images/local-business-images/Icon (8).svg"
                width={48}
                height={48}
                alt="user"
              />
              <div>
                <h4 className="text-[28px] leading-9 font-bold text-natural-D_Grey">
                  828,867
                </h4>
                <p className="text-base text-natural-grey">Event Bookings</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-4">
              <Image
                src="/images/local-business-images/Icon (10).svg"
                width={48}
                height={48}
                alt="user"
              />
              <div>
                <h4 className="text-[28px] leading-9 font-bold text-natural-D_Grey">
                  46,328
                </h4>
                <p className="text-base text-natural-grey">Clubs</p>
              </div>
            </div>
            <div className="flex gap-4 mt-10">
              <Image
                src="/images/local-business-images/Icon (9).svg"
                width={48}
                height={48}
                alt="user"
              />
              <div>
                <h4 className="text-[28px] leading-9 font-bold text-natural-D_Grey">
                  1,926,436
                </h4>
                <p className="text-base text-natural-grey">Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;
