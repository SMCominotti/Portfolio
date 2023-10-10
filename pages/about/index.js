import React, { useState } from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaAngular,
  FaDocker,
  FaFigma,
  FaSass,
} from "react-icons/fa";

import { SiRedux, SiTypescript, SiTailwindcss } from "react-icons/si";

export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Full Stack Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiRedux />,
          <FaAngular />,
          <SiTypescript />,
          <FaDocker />,
          <FaSass />,
          <SiTailwindcss />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />],
      },
    ],
  },
  {
    title: "Experiencia",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "Certificaciones",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

//components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
           variants={fadeIn("right", 0.2)}
           initial="hidden"
           animate="show"
           exit="hidden" 
           className="h2 text-2xl md:text-4xl xl:text-4xl xl:ml-4">
            Descubriendo el <br/><span className="text-accent">Mundo Digital </span>con <br/>Pasión y Versatilidad
          </motion.h2>
          <motion.p 
           variants={fadeIn("right", 0.4)}
           initial="hidden"
           animate="show"
           exit="hidden"
          className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 xl:ml-4">
            Mi formación incluye un bootcamp intensivo de más de 800 horas,
            donde me he enfocado especialmente en el desarrollo Front-end.
            <br />
            Destaco por mi automotivación y enfoque en la mejora continua. Soy
            orientada a resultados y al cliente, además de ser empática,
            creativa, flexible, enérgica y curiosa.
          </motion.p>
        </div>
        {/* info */}
        <motion.div 
         variants={fadeIn("left", 0.4)}
         initial="hidden"
         animate="show"
         exit="hidden"
        className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4"></div>
          <div className="bg-pink-400/10 py-2 xl:py-6 flex flex-row gap-4 items-center  justify-center">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }
        cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-start xl:items-">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-start text-white/60"
                >
                  {/* Title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex"></div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
