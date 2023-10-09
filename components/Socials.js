import Link from "next/link";

import {
  AiFillGithub,
  AiFillLinkedin
} from 'react-icons/ai'

const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://github.com/SMCominotti'} className="hover:text-accent transition-all duration-300">
      <AiFillGithub/>
    </Link>
    <Link href={'https://www.linkedin.com/in/stella-maris-cominotti/'} className="hover:text-accent transition-all duration-300">
      <AiFillLinkedin/>
    </Link>
  </div>
  );
};

export default Socials;
