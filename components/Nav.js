import {HiHome,HiUser,HiRectangleGroup,HiViewColumns,HiChatBubbleBottomCenterText,HiEnvelope} from 'react-icons/hi2';
//  links
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

import Link from 'next/link';

import {useRouter} from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
  <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] bg-red-500/30 p-20'>
    {/*inner*/}
    <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-80 xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
      {navData.map((link,index)=>{
        return <Link href={link.path}>{link.icon}</Link>
      })}
    </div>
  </nav>
  );
};

export default Nav;
