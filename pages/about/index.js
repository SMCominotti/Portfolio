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
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="javascript" />,
          <FaReact key="react" />,
          <SiRedux key="redux" />,
          <FaAngular key="angular" />,
          <SiTypescript key="typescript" />,
          <FaDocker key="docker" />,
          <FaSass key="sass" />,
          <SiTailwindcss key="tailwindcss" />,
        ],
        
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma key="Figma"/>],
      },
    ],
  },
  {
    title: "Educación",
    info: [
      {
        title: "Full Stack Developer - Bootcamp Soy Henry",
        stage: "2023",
      },
      {
        title: "Teaching Assistant Tutor - Bootcamp Soy Henry",
        stage: "2023",
      },
      {
        title: "UX/UI Designer - Codo a Codo",
        stage: "2023",
      },
      {
        title: "Full Stack Java - Codo a Codo",
        stage: "2022",
      },
    ],
  },
  {
    title: "Certificaciones",
    info: [
      {
        title: "Full Stack Developer",
        url: "https://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=275e896f3471cec2affbc4732c214ffbe6765813e3ed9d4c6da1d79505ce1606",
      },
      {
        title: "Diseño Interfaz UI Esencial",
        url: "https://www.linkedin.com/learning/certificates/6cfb52bf43e05a3dc726ecfc617ab736a3c147a478b9304a02b3a106c2b78f41",
      },
      {
        title: "Diseño Interfaz UI Avanzado",
        url: "https://www.linkedin.com/learning/certificates/dc8d21c16f0092276b6538e241e3fcb241fdd5d2cc2076af59b360cf42cd269a",
      },
      {
        title: "Experiencia de Usuario (UX) Esencial",
        url: "https://www.linkedin.com/learning/certificates/cad1285d235c12faa3088045e5a8b618090cc5298865916c0af743caeabc2899",
      },
      {
        title: "Experiencia de Usuario (UX) Avanzado",
        url: "https://www.linkedin.com/learning/certificates/1026797e0e164493f5a2e931e7a63c042877eb1006f3ba58e395629c0668b2b3",
      },
      {
        title: "Figma Esencial",
        url: "https://www.linkedin.com/learning/certificates/1c8558a59c14246e62bbde774c2189cbe61f572199fbc4fab212ece281675e87",
      },
      {
        title: "Figma Avanzado",
        url: "https://www.linkedin.com/learning/certificates/68c8c232f637297bacf5cd45c74d06b2d0233b8e16d94b36245d203c3555d78c",
      },
      {
        title: "Domina React",
        url: "https://drive.google.com/file/d/1AD7BeXPEScWIPBOFCsNjHCiq7erydDas/view",
      },
      {
        title: "Full Stack Java",
        url: "https://res.cloudinary.com/dt8snufoj/image/upload/v1688783680/SweetHome/kvw5sl1tp8wo0pzdiamz.jpg",
      },
      {
        title: "GitHub para programadores",
        url: "https://www.linkedin.com/learning/certificates/ffaf307d9653dbb6eea9cb1e4b546328495326ac0417ab48d640ade88627d22b",
      },
      {
        title: "Docker Esencial",
        url: "https://www.linkedin.com/learning/certificates/176d95232f72c4ee913eabea555802b0c2e4caae2ba7644019bd8c329b688a8f",
      },
      {
        title: "TypeScript Esencial",
        url: "https://www.linkedin.com/learning/certificates/b78118a2ecd2e37581ef538be9533e128114cb38ce2eb62d996d7cd7a18fb6f9",
      },
      {
        title: "TypeScript Avanzado",
        url: "https://www.linkedin.com/learning/certificates/616f7836807fe40e8ed790b245e2fef622ab875f6aa90100952f129d3bcbf1e3",
      },
      {
        title: "Ingles B1",
        url: "https://asset.cloudinary.com/dt8snufoj/f09601cdef9c601c565285c32b6f75c5",
      },
      {
        title: "Portugues A2",
        url: "https://ibb.co/SRwBfBL",
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
            className="h2 text-2xl md:text-4xl xl:text-4xl xl:ml-4"
          >
            Descubriendo el <br />
            <span className="text-accent">Mundo Digital </span>con <br />
            Pasión y Versatilidad
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 xl:ml-4"
          >
            Mi formación incluye un bootcamp intensivo de más de 800 horas,
            donde me he enfocado especialmente en el desarrollo Front-end, y un curso de mas de 210 horas de diseño UX/UI.
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
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4"></div>
          <div className="bg-pink-400/10 py-2 xl:py-6 flex flex-row gap-4 items-center justify-center">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                key={`about_${itemIndex}`} 
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
          <div className="overflow-x-auto lg:overflow-x-visible">
            {aboutData[index].info.map((item, index) => {
              return (
                <div
                key={`about_${index}`} 
                  className="flex flex-col md:flex-row max-w-max gap-x-2 items-start text-white/60"
               
                >
                  {/* Title */}
                  <div className="flex items-center mb-2 md:mb-0">
                  <div className="font-light mr-2">{item.title}</div>
                 
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      
                    >
                      <button
                        className="bg-white/20 hover:bg-white/80 text-black font-bold rounded-full text-xs md:text-sm"
                        style={{
                          fontSize: "10px",
                          width: "1.5rem",
                          height: "1.5rem",
                        }}
                      >
                        Ver
                      </button>
                    </a>
                  )}
                  </div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, newIndex) => {
                      return <div key={`about_${newIndex}`}  className="text-xl text-white">{icon}</div>;
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
