import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import bannerImg1 from "../public/image2.png";
import bannerImg2 from "../public/image1.png";
import bannerImg3 from "../public/image3.png";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Banner() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);
  return (
    <section className="mt-16">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="flex items-center justify-end md:flex-col
          md:mt-10"
            data-aos="fade-zoom-in"
          >
            <div className="relative left-[12%] md:left-[5%]">
              <h1 className="uppercase text-black font-light pb-5 text-[40px] w-[70%] md:text-[30px]">
                Technology Hack You Won{`'`}t Get
              </h1>
              <Link
                href={""}
                className="bg-black text-white px-4 py-3 md:py-2 md:px-2 md:text-[12px] rounded hover:bg-transparent hover:text-black duration-150 border-2 border-transparent hover:border-black"
              >
                Shop Product
              </Link>
            </div>
            <Image
              className=" object-contain w-[50%] h-96"
              src={bannerImg1}
              alt="image slide 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex items-center justify-end md:flex-col
          md:mt-10"
          >
            <div className="relative left-[12%] md:left-[5%]">
              <h1 className="uppercase text-black font-light pb-5 text-[40px] w-[70%] md:text-[30px]">
                Technology Hack You Won{`'`}t Get
              </h1>
              <Link
                href="/"
                className="bg-black text-white px-4 py-3 md:py-2 md:px-2 md:text-[12px] rounded hover:bg-transparent hover:text-black duration-150 border-2 border-transparent hover:border-black"
              >
                Shop Product
              </Link>
            </div>
            <Image
              className=" object-contain w-[50%] h-96"
              src={bannerImg2}
              alt="image slide 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex items-center justify-end md:flex-col
          md:mt-10"
          >
            <div className="relative left-[12%] md:left-[5%]">
              <h1 className="uppercase text-black font-light pb-5 text-[40px] w-[70%] md:text-[30px]">
                Technology Hack You Won{`'`}t Get
              </h1>
              <Link
                href="/"
                className="bg-black text-white px-4 py-3 md:py-2 md:px-2 md:text-[12px] rounded hover:bg-transparent hover:text-black duration-150 border-2 border-transparent hover:border-black"
              >
                Shop Product
              </Link>
            </div>
            <Image
              className=" object-contain w-[50%] h-96"
              src={bannerImg3}
              alt="image slide 1"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
