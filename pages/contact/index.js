//components
import Circles from "/components/Circles";
import Avatar from "../../components/Avatar";

//framer
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../variants";

if (typeof window !== "undefined") {
  const $form = document.querySelector('#form');
  const $buttonMailto = document.querySelector('#mail');


  $form.addEventListener('submit', handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);

    $buttonMailto.setAttribute('href', `mailto:smcominotti@gmail.com?subject=Nombre: ${form.get('name')} Correo: ${form.get('email')} Asunto: ${form.get('subject')}&body=${form.get('message')}`);
$buttonMailto.click();

  }
}

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
          className="flex-1 flex flex-col gap-6 w-full mx-auto"
          id="form" action="">
            <div className="flex gap-x-6 w-full">
              <div className="flex flex-col w-1/2">
                <input type="text" name="name" id="name" required placeholder="Nombre" className="input" />
              </div>
              <div className="flex flex-col w-1/2">
                <input type="text" name="email" id="email" required placeholder="Email" className="input" />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <input type="text" required placeholder="Asunto" className="input" name="subject" id="subject"/>
            </div>
            <div className="flex flex-col w-full">
              <textarea name="message" id="message" required placeholder="Mensaje" className="textarea"></textarea>
            </div>
            <button type="submit" className="btn rounded-full border border-white/50 max-w-[170] px-20 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
             <span className="group-hover:-translate-y-[10%] group-hover:opacity-50 hover:text-purple-200 transition-all duration-500">
                Hablemos
              </span>
            </button>
          </motion.form>
          <a href="mailto:smcominotti@gmail.com" id="mail" className="opacity-0">mail</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
