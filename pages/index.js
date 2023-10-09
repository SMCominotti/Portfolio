import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar"
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
return (
<div className="bg-primary/60 h-full">
<div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
<div className="text-center flex flex-col justify-center xl:pt-36 xl:text-left h-full container mx-auto">
<motion.h1
variants={fadeIn("down", 0.2)}
initial="hidden"
animate="show"
exit="hidden"
className="h1 mt-1 xl:mt-0 text-2xl md:text-5xl lg:text-4xl xl:text-6xl text-center xl:text-left xl:ml-[-70px]">
El arte de transformar ideas <br /> en{" "}
<span className="text-accent">Experiencias Digitales </span>
</motion.h1>
<motion.p
variants={fadeIn("down", 0.3)}
initial="hidden"
animate="show"
exit="hidden"
className="max-w-2xl xl:max-w-3xl mx-auto xl:mx-0 mb-2 xl:mb-2 xl:ml-[-70px] md:text-left">
Mi pasión por la perfección en la experiencia del usuario impulsa
cada línea de código, cada paleta de colores y cada elemento visual,
a unirse en un baile cautivador que celebra la belleza en la
utilidad, logrando que el usuario se sumerja en un viaje fluido y
envolvente a traves de cada pantalla.
<br />
Bienvenidos a mi mundo, donde las ideas toman forma, se entrelazan
con la realidad digital y la estética se convierte en la compañera
inseparable de la experiencia.
</motion.p>
<div className="flex justify-center xl:hidden relative mt-4 sm:mt-22 md:mt-20">
<ProjectsBtn />
</div>
<motion.div
variants={fadeIn("down", 0.4)}
initial="hidden"
animate="show"
exit="hidden"
className="hidden xl:flex xl:ml-80 md:mt-20"
>
<ProjectsBtn />
</motion.div>
</div>
</div>
<div className="w-[1200px] h-full absolute right-0 bottom-0">
<div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 ml-4 xl:ml-6"></div>
<ParticlesContainer/>
<div>
<motion.div 
variants={fadeIn("up", 0.5)}
initial="hidden"
animate="show"
exit="hidden"
transition={{duration:1, ease: 'easeInOut'}}
className="w-full h-full max-w-[537px] max-h-[478px] absolute bottom-6 lg:bottom-12 lg:right-[3%]">
  <Avatar/>
</motion.div>
</div>
</div>
</div>
);
};

export default Home;
