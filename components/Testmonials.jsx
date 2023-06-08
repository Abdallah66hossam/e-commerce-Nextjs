import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
import Aos from "aos";
import "aos/dist/aos.css";
import human1 from "../public/human-1.jpeg";
import human2 from "../public/human-2.jpg";
import human3 from "../public/human-3.png";
import human4 from "../public/human-4.png";
import Image from "next/image";

const Testmonials = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);
  return (
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
      className="mySwiper w-full mb-20"
      data-aos="fade-zoom-in"
    >
      <SwiperSlide>
        <section className="bg-transparent container">
          <div className="max-w-screen-xl md:px-4 md:py-8 mx-auto text-center py-16 px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-2xl md:text-base font-medium text-gray-900">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industries
                  standard dummy text ever since the 1500s, when an unknown
                  printer.
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <Image
                  className="w-6 h-6 rounded-full"
                  src={human1}
                  alt="profile picture"
                  width={200}
                  height={200}
                />
                <div className="flex items-center divide-x-2 divide-gray-500">
                  <div className="pr-3 font-medium text-gray-900">
                    Micheal Gough
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 md:text-xs">
                    CEO
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="bg-transparent container">
          <div className="max-w-screen-xl md:px-4 md:py-8 mx-auto text-center py-16 px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-2xl md:text-base font-medium text-gray-900">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industries
                  standard dummy text ever since the 1500s, when an unknown
                  printer.
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <Image
                  className="w-6 h-6 rounded-full"
                  src={human2}
                  alt="profile picture"
                  height={200}
                  width={200}
                />
                <div className="flex items-center divide-x-2 divide-gray-500">
                  <div className="pr-3 font-medium text-gray-900 md:text-sm">
                    Jonas Smith
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 md:text-xs">
                    CTO
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="bg-transparent container">
          <div className="max-w-screen-xl md:px-4 md:py-8 mx-auto text-center py-16 px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-2xl md:text-base font-medium text-gray-900">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industries
                  standard dummy text ever since the 1500s, when an unknown
                  printer.
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <Image
                  className="w-6 h-6 rounded-full"
                  src={human3}
                  alt="profile picture"
                  height={200}
                  width={200}
                />
                <div className="flex items-center divide-x-2 divide-gray-500">
                  <div className="pr-3 font-medium text-gray-900 md:text-sm">
                    Frank Walter
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 md:text-xs">
                    HR
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="bg-transparent container">
          <div className="max-w-screen-xl md:px-4 md:py-8 mx-auto text-center py-16 px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-2xl md:text-base font-medium text-gray-900">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industries
                  standard dummy text ever since the 1500s, when an unknown
                  printer.
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <Image
                  className="w-6 h-6 rounded-full"
                  src={human4}
                  alt="profile picture"
                  height={200}
                  width={200}
                />
                <div className="flex items-center divide-x-2 divide-gray-500">
                  <div className="pr-3 font-medium text-gray-900 md:text-sm">
                    Tomas James
                  </div>
                  <div className="pl-3 text-sm font-light text-gray-500 md:text-xs">
                    DEVElOPER
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default Testmonials;
