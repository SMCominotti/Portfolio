import Image from "next/image";

const Bulb = () => {
  return (
  <div className="w-[150px] xl:w-[250px] absolute -left-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10">
    <Image
    src={'/bulb.png'}
    width={260}
    height={200}
    className="w-full h-full"
    alt=''
    />
    </div>
    );
};
  
  export default Bulb;