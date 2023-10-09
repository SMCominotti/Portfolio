import Image from "next/image";
import Link from "next/link";
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-end px-4 xl:px-0 xl:h-[80px]">
      <div className="container mx-auto">
        <div className="mt-2 xl:mt-1 ml-8 md:ml-8 lg:ml-4 xl:ml-auto flex justify-end"> 
          <Link href={'/'}>
            <Image
              src="/StelLogoVioleta.svg"
              width={200}
              height={16}
              alt=""
              priority={true}
              className="w-40 md:w-48 lg:w-56 xl:w-60"
            />
          </Link>
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;

