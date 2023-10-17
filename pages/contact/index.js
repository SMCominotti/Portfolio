import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';


//components
import Circles from "/components/Circles";
import Avatar from "../../components/Avatar";

//framer
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../variants";

const Contact = () => {
  const $formRef = useRef(null);
  const [emailError, setEmailError] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const $form = document.querySelector("#form");
      if ($form) { 
        $form.addEventListener("submit", handleSubmit);
      }
      $formRef.current = $form;
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const $form = $formRef.current;
    if (!$form) {
      return;
    }

    const emailInput = $form.querySelector('#email');
    const existingConfirmation = $form.querySelector('.confirmation-message');

    // Validar el correo electrónico
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const emailValue = emailInput.value.toLowerCase();

    if (!emailPattern.test(emailValue)) {
      setEmailError('Ingrese una dirección de correo electrónico válida.');
      return;
    }

    setEmailError('');

    if (existingConfirmation) {
      $form.removeChild(existingConfirmation);
    }

    // Enviar el formulario
    const form = new FormData($form);
    const response = await fetch($form.action, {
      method: $form.method,
      body: form,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      const confirmationMessage = document.createElement('div');
      confirmationMessage.className = 'confirmation-message';
      
      const successText = document.createElement('span');
      successText.innerText = 'Tu mensaje ha sido enviado... ';
      successText.className = 'text-green-500 font-bold';
      
      const thanksText = document.createElement('span');
      thanksText.innerText = 'Gracias por contactarme';
      thanksText.className = 'font-bold';
      
      confirmationMessage.appendChild(successText);
      confirmationMessage.appendChild(thanksText);
      
      $form.reset(); // Restablece el formulario después de enviarlo
      setEmail(''); // Restablece el mail después de enviarlo

      $form.appendChild(confirmationMessage);
      
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  }

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
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center text-2xl mb-12"
            >
              Te interesa mi perfil?
              <br /> <span className="text-4xl text-accent">Contactame</span>
            </motion.h2>
            {/* form */}
            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
              id="form"
              action="https://formspree.io/f/mzblywjd"
              method="POST"
            >
              <div className="flex gap-x-6 w-full">
                <div className="flex flex-col w-1/2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Nombre"
                    className="input"
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    required
                    placeholder="Email"
                    className={`input lowercase ${emailError ? 'border-red-500' : ''}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ textTransform: "none" }}
                  />
                  {emailError && <p className="text-red-600">{emailError}</p>} 
                </div>
              </div>
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  required
                  placeholder="Asunto"
                  className="input"
                  name="subject"
                  id="subject"
                />
              </div>
              <div className="flex flex-col w-full">
                <textarea
                  name="message"
                  id="message"
                  required
                  placeholder="Mensaje"
                  className="textarea"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn rounded-full border border-white/50 max-w-[170] px-20 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              >
                <span className="group-hover:-translate-y-[10%] group-hover:opacity-50 hover.text-purple-200 transition-all duration-500">
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

