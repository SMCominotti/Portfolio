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
          path: "/1.png",
          url: "https://planillapresupuesto.netlify.app/",
        },
        {
          title: "To Do App",
          path: "/2.png",
          url: "https://angulartodoappsmc.netlify.app/",
        },
        {
          title: "E-Commerce: Sweet Home",
          path: "/3.png",
          url: "https://sweet-home-front.onrender.com/ ",
        },
        {
          title: "Single Page Aplication: Smak",
          path: "/4.png",
          url: "https://smak-sabores-del-alma.onrender.com/  ",
        },
        // {
        //   title: "Conferencia",
        //   path: "/5.jpg",
        //   url: "https://segundapartesmc.netlify.app/",
        // },
        // {
        //   title: "Películas",
        //   path: "/6.jpg",
        //   url: "https://app-de-peliculas-con-react.onrender.com/",
        // },
      ],
    },
    {
      images: [
        // {
        //   title: "Presupuesto",
        //   path: "/1.jpg",
        //   url: "https://planillapresupuesto.netlify.app/",
        // },
        // {
        //   title: "To Do App",
        //   path: "/2.jpg",
        //   url: "https://angulartodoappsmc.netlify.app/",
        // },
        // {
        //   title: "E-Commerce: Sweet Home",
        //   path: "/3.jpg",
        //   url: "https://sweet-home-w1rt.onrender.com/  ",
        // },
        // {
        //   title: "Single Page Aplication: Smak",
        //   path: "/4.jpg",
        //   url: "https://smak-sabores-del-alma.onrender.com/  ",
        // },
        {
          title: "Conferencia",
          path: "/5.png",
          url: "https://segundapartesmc.netlify.app/",
        },
        {
          title: "Películas",
          path: "/6.png",
          url: "https://app-de-peliculas-con-react.onrender.com/",
        },
        {
          title: "Rotwein App",
          path: "/7.png",
          url: "https://docs.google.com/presentation/d/1yoG0m1gJvBnTPKdzgmoFaedHwz7gtVtOC21X9xAqqwE/edit?usp=sharing",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <div className="mt-2">
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-[250px] sm:h-[520px] md:h-[510px]"
        wrapperTag="div"
      >
        {workSlider.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 grid.rows-2 gap-4 cursor-pointer">
                {slide.images.map((image, index) => {
                  return (
                    <div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={index}>
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        {/* image */}
                        <Image src={image.path} width={350} height={350} alt=''/>
                        {/* overlay gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 md:group-hover:-translate-y-20 md:group-hover:xl:-translate-y-30">
                          <a href={image.url} target="_blank" rel="noopener noreferrer" className="group">
                            <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                              {/* title part 1 */}
                              <div className="delay-100">VER</div>
                              {/* title part 2 */}
                              <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROYECTO</div>
                              {/* icon */}
                              <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"><BsArrowRight/></div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default WorkSlider;

