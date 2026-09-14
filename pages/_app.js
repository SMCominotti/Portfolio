import "../styles/globals.css";
import Layout from "../components/Layout";
import Transition from "../components/Transition";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";

const SITE_URL = "https://portfolio-smc.vercel.app";
const SITE_TITLE = "Stella Maris Cominotti | Desarrolladora Full Stack";
const SITE_DESCRIPTION =
  "Desarrolladora full stack. Construyo aplicaciones web que funcionan y perduran: código ordenado, arquitectura pensada para crecer y buenas prácticas que la hacen mantenible en el tiempo.";
const SITE_IMAGE = `${SITE_URL}/og-image.jpg`;

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />

        {/* Open Graph (LinkedIn, Facebook, WhatsApp, etc.) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={SITE_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter Card (algunos previsores lo reutilizan como fallback) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={SITE_IMAGE} />
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition/>
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
