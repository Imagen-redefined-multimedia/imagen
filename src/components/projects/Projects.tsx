"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

// Example projects data
const projectsData = [
  {
    id: 1,
    title: "Project One",
    image: "/carousel/menu-01.jpg",
  },
  {
    id: 2,
    title: "Project Two",
    image: "/carousel/menu-02.jpg",
  },
  {
    id: 3,
    title: "Project Three",
    image: "/carousel/menu-03.jpg",
  },
  // Add as many as you want
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="mx-5 md:mx-15 lg:mx-16 mt-10 md:mt-12 text-center items-center"
    >
      <h1 className="text-[1.2rem] md:text-[1.5rem] xl:text-[1.6rem]">Our Projects</h1>
      <p className="font-light text-[1rem] md:text-[1.2rem] xl:text-[1.4rem]">
        Latest Accomplished Projects
      </p>

      <div className="mt-5 w-full">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{ delay: 3000 }}
        >
          {projectsData.map(({ id, title, image }) => (
            <SwiperSlide key={id}>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-64"
                />
                <div className="absolute bottom-0 bg-black bg-opacity-50 w-full p-3 text-white font-semibold">
                  {title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
