import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import "swiper/css";
import Image from 'next/image';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const workSlider = {
  slides: [
    { title: "TiendaVue", path: "/9.png", url: "https://smcominotti.github.io/tiendaVue/" },
    { title: "Presupuesto Familiar", path: "/8.png", url: "https://mododemopresupuestofamiliar.netlify.app/" },
    { title: "Presupuesto", path: "/1.png", url: "https://planillapresupuesto.netlify.app/" },
    { title: "To Do App", path: "/2.png", url: "https://angulartodoappsmc.netlify.app/" },
    { title: "E-Commerce: Sweet Home", path: "/3.png", url: "https://sweet-home-front.onrender.com/" },
    { title: "Single Page Aplication: Smak", path: "/4.png", url: "https://smak-sabores-del-alma.onrender.com/" },
    { title: "Conferencia", path: "/5.png", url: "https://segundapartesmc.netlify.app/" },
    { title: "Películas", path: "/6.png", url: "https://app-de-peliculas-con-react.onrender.com/" },
    { title: "Rotwein App", path: "/7.png", url: "https://docs.google.com/presentation/d/1yoG0m1gJvBnTPKdzgmoFaedHwz7gtVtOC21X9xAqqwE/edit?usp=sharing" },
  ],
};

const WorkSlider = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = workSlider.slides.length;

  return (
    <div className="mt-2 flex items-center gap-x-4">
      {/* Flecha izquierda */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className={`text-3xl flex-shrink-0 transition ${activeIndex === 0 ? "invisible" : "text-accent hover:text-white"}`}
      >
        <BsArrowLeft />
      </button>

      {/* Slider */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        spaceBetween={10}
        className="h-[300px] sm:h-[500px] md:h-[500px] w-full"
      >
        {workSlider.slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-lg overflow-hidden flex items-center justify-center group w-full h-full">
              <Image src={image.path} fill style={{ objectFit: "contain" }} alt={image.title} />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
              <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 md:group-hover:-translate-y-20">
                <a href={image.url} target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                    <div>VER</div>
                    <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROYECTO</div>
                  </div>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Flecha derecha */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className={`text-3xl flex-shrink-0 transition ${activeIndex === total - 1 ? "invisible" : "text-accent hover:text-white"}`}
      >
        <BsArrowRight />
      </button>
    </div>
  );
};

export default WorkSlider;
