import Image from "next/image";
import React from "react";

const Community = () => {
  return (
    <>
      <div className="container py-10">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-natural-D_Grey">
            Manage your entire community <br /> in a single system
          </h2>
          <p className="text-base text-natural-grey mt-2">
            Who is Nextcent suitable for?
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-16 xl:gap-28 justify-between mt-5">
          <div className="flex flex-col justify-center items-center shadow-shadow1 py-6 px-8">
            <Image
              src="images/community-images/Icon (3).svg"
              width={65}
              height={56}
              alt=""
            />
            <h3 className="text-[28px] font-bold text-natural-D_Grey text-center leading-9 mt-4">
              Membership Organisations
            </h3>
            <p className="text-sm mt-2 text-center">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="flex flex-col justify-center items-center shadow-shadow1 py-6 px-8">
            <Image
              src="images/community-images/Icon (4).svg"
              width={65}
              height={56}
              alt=""
            />
            <h3 className="text-[28px] font-bold text-natural-D_Grey text-center leading-9 mt-4">
              Membership Organisations
            </h3>
            <p className="text-sm mt-2 text-center">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="flex flex-col justify-center items-center shadow-shadow1 py-6 px-8">
            <Image
              src="images/community-images/Icon (5).svg"
              width={65}
              height={56}
              alt=""
            />
            <h3 className="text-[28px] font-bold text-natural-D_Grey text-center leading-9 mt-4">
              Membership Organisations
            </h3>
            <p className="text-sm mt-2 text-center">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
