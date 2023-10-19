import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Image from 'next/image'

import { BsArrowRight } from "react-icons/bs";

import { Pagination } from "swiper";

const workSlider = {
  slides: [
    {
      images: [
        {
          title: "Presupuesto",
          path: "/Proyecto1.jpg",
          url: "https://planillapresupuesto.netlify.app/",
        },
        {
          title: "To Do App",
          path: "/Proyecto2.jpg",
          url: "https://angulartodoappsmc.netlify.app/",
        },
        {
          title: "E-Commerce: Sweet Home",
          path: "/Proyecto3.jpg",
          url: "https://sweet-home-w1rt.onrender.com/  ",
        },
        {
          title: "Single Page Aplication: Smak",
          path: "/Proyecto4.jpg",
          url: "https://smak-sabores-del-alma.onrender.com/  ",
        },
        {
          title: "Conferencia",
          path: "/Proyecto5.jpg",
          url: "https://segundapartesmc.netlify.app/",
        },
        {
          title: "Películas",
          path: "/Proyecto6.jpg",
          url: "https://app-de-peliculas-con-react.onrender.com/",
        },
      ],
    },
    {
      images: [
        {
          title: "Presupuesto",
          path: "/Proyecto1.jpg",
          url: "https://planillapresupuesto.netlify.app/",
        },
        {
          title: "To Do App",
          path: "/Proyecto2.jpg",
          url: "https://angulartodoappsmc.netlify.app/",
        },
        {
          title: "E-Commerce: Sweet Home",
          path: "/Proyecto3.jpg",
          url: "https://sweet-home-w1rt.onrender.com/  ",
        },
        {
          title: "Single Page Aplication: Smak",
          path: "/Proyecto4.jpg",
          url: "https://smak-sabores-del-alma.onrender.com/  ",
        },
        {
          title: "Conferencia",
          path: "/Proyecto5.jpg",
          url: "https://segundapartesmc.netlify.app/",
        },
        {
          title: "Películas",
          path: "/Proyecto6.jpg",
          url: "https://app-de-peliculas-con-react.onrender.com/",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid.rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                    <div className="flex items-center justify-center relative overflow-hidden">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt=''/>
                      {/* overlay gradiente */}
                      
                      </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
