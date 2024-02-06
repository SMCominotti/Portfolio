import Link from "next/link";

import {
  AiFillGithub,
  AiFillLinkedin
} from 'react-icons/ai'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg text-white/60">
      <a href="https://github.com/SMCominotti" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
        <AiFillGithub/>
      </a>
      <a href="https://www.linkedin.com/in/stella-maris-cominotti/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
        <AiFillLinkedin/>
      </a>
    </div>
  );
};

export default Socials;

