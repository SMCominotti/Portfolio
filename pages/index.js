// import Image from "next/image";
// import ParticiclesContainer from "../components/ParticlesContainer";
// import ProjectBtn from "../components/ProjectBtn";
// import Avatar from "../components/Avatar";
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <h1 className="h1">
          El arte de transformar ideas <br /> en{" "}
            <span className="text-accent">Experiencias Digitales </span>
          </h1>
          <p className="max-w-2xl xl:max-w-3xl mx-auto xl:mx-0 mb-20 xl:mb-16">
             Mi pasión por la perfección en la experiencia del usuario impulsa cada línea de código, cada paleta de colores y cada elemento visual a unirse en un baile cautivador que celebra la belleza en la utilidad, logrando que el usuario se sumerja en un viaje fluido y envolvente a traves de cada pantalla.
             <br></br>
              Bienvenidos a mi mundo, donde las ideas toman forma, se entrelazan con la realidad digital y la estética se convierte en la compañera inseparable de la experiencia.
          </p>
        </div>
        
      </div>
      <div>image</div>
    </div>
  );
};

export default Home;
