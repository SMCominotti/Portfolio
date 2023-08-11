import Image from "next/image";
import Link from "next/Link";
import {HiArrowRight} from 'react-icons/hi2'

const ProjectsBtn = () => {
  return <div className="mx-auto xl:mx-2">
    <Link href={'/work'} className="relative w-[120px] h-[120px] flex justify-center items-center  bg-cover bg-center bg-no-repeat group">
      <Image 
      src={'/rounded-text.png'} 
      width={101} 
      height={108} 
      alt='' 
      className="animate-spin-slow w-full h-full max-w-[91px] max-h-[98px]"
      />
      <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"/>
    </Link>
    
    </div>;
};

export default ProjectsBtn;
