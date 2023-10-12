//components
import Circles from "/components/Circles";
import Avatar from "../../components/Avatar";

//framer
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
    <Circles />
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="hidden xl:flex absolute bottom-0 -left-[370px]"
    >
      <Avatar />
    </motion.div>
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2 
          variants={fadeIn('up',0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="h2 text-center text-2xl mb-12">
            Te interesa mi perfil?
            <br /> <span className="text-4xl text-accent">Contactame</span>
          </motion.h2>
          {/* form */}
          <motion.form 
           variants={fadeIn('up',0.4)}
           initial='hidden'
           animate='show'
           exit='hidden'
          className="flex-1 flex flex-col gap-6 w-full mx-auto">
            <div className="flex gap-x-6 w-full">
              <div className="flex flex-col w-1/2">
                <input type="text" placeholder="Nombre" className="input" />
              </div>
              <div className="flex flex-col w-1/2">
                <input type="text" placeholder="Email" className="input" />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <input type="text" placeholder="Asunto" className="input" />
            </div>
            <div className="flex flex-col w-full">
              <textarea placeholder="Mensaje" className="textarea"></textarea>
            </div>
            <button className="btn rounded-full border border-white/50 max-w-[170] px-20 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
             <span className="group-hover:-translate-y-[10%] group-hover:opacity-50 hover:text-purple-200 transition-all duration-500">
                Hablemos
              </span>
            </button>
          </motion.form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
