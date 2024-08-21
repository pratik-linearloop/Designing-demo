import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const SiteFooter = () => {
  return (
    <div className="container">
      <div className="flex flex-wrap md:flex-nowrap gap-3 items-center">
        <div className="w-full md:w-2/5">
          <Image src="/images/pana.png" width={440} height={430} alt="pana" />
        </div>
        <div className="w-full md:w-3/5">
          <h3 className="text-4xl font-semibold text-natural-D_Grey">
            The unseen of spending three years at Pixelgrade
          </h3>
          <p className="text-sm text-natural-grey mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <Button className="bg-Primary mt-8">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default SiteFooter;
