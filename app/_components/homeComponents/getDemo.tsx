import { Button } from "@/components/ui/button";
import React from "react";
import RightArrowComponent from "../theme/icons/rightArrowComponent";

const GetDemo = () => {
  return (
    <div className="bg-natural-Silver py-8">
      <div className="container flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-6xl font-semibold text-natural-D_Grey text-center">
          Pellentesque suscipit
          <br /> fringilla libero eu.
        </h2>
        <Button className="bg-Primary mt-8 flex gap-3">
          <p className="text-base font-medium text-white">Get a demo</p>
          <RightArrowComponent className="text-white" />
        </Button>
      </div>
    </div>
  );
};

export default GetDemo;
