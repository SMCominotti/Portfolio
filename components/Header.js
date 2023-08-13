import Image from 'next/image';
import Link from 'next/Link';
import Socials from '../components/Socials'

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className='container mx-auto'>
        <div className="mt-20 ml-[-330px]"> 
          <Link href={'/'}>
            <Image
              src="/logs.svg"
              width={628}
              height={38}
              alt=""
              priority={true}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;


