import Image from "next/image";
import {LiaTelegramPlane} from 'react-icons/lia'

const ProjectsBtn = () => {

  return (
  <div className="mx-auto xl:mx-2">
    <div 
    className="relative w-[200px] h-[200px] flex justify-center items-center  bg-cover bg-center bg-no-repeat group " 
    >
      <Image 
      src={'/DisfrutaBco.png'} 
      width={150} 
      height={158} 
      alt='' 
      className="animate-spin-slow w-full h-full max-w-[110px] max-h-[110px] cursor-pointer"
      />
      <LiaTelegramPlane className="absolute text-4xl justify-center group-hover:translate-x-2 transition-all duration-300"/>
    </div>
  </div>
  );
}

export default ProjectsBtn;
