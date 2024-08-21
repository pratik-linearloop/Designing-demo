import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroCarousel = () => {
  return (
    <>
      <div>
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {Array.from(Array(3)).map((i) => {
              return (
                <>
                  <CarouselItem className="pl-0">
                    <div className="bg-natural-Silver pl-4 md:pl-0">
                      <div className="container flex flex-wrap md:flex-nowrap items-center justify-between py-5 xl:py-20 px-4 md:px-10 xl:px-16">
                        <div>
                          <h2 className="text-[64px] font-semibold leading-[76px] text-natural-grey">
                            Lessons and insights
                            <br />
                            <span className="text-Primary"> from 8 years</span>
                          </h2>
                          <p className="text-base font-normal text-natural-grey mt-2 mb-5">
                            Where to grow your business as a photographer: site
                            or social media?
                          </p>
                          <Button className="bg-Primary">Register</Button>
                        </div>
                        <div>
                          <Image
                            src="/images/banner-Image.png"
                            alt="banner-image"
                            width={391}
                            height={407}
                          />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                </>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default HeroCarousel;

