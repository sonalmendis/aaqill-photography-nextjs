import { useState, useRef, useEffect } from "react";
import "@/styles/globals.css";
import Head from "next/head";
import { Abhaya_Libre } from "next/font/google";
import localFont from "@next/font/local";
import { ParallaxProvider } from "react-scroll-parallax";

// How to import from GoogleFonts:
const AbhayaLibre = Abhaya_Libre({
  weight: ["400", "700"],
  subsets: ["latin"],
});

// How to import from local:
const SofiaPro = localFont({
  src: "../../public/Fonts/sofiapro-light-webfont.woff2",
  formats: ["woff2"],
});

export function reportWebVitals(metric) {
  console.log(metric);
}

export default function App({ Component, pageProps }) {
  // const [scrollEl, setScrollElement] = useState(null);
  // const ref = useRef();
  // useEffect(() => {
  //   setScrollElement(ref.current);
  // }, [ref]);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Aaqill Photography</title>
      </Head>

      <main className={`${SofiaPro.className} ${AbhayaLibre.className}`}>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </main>
    </>
  );
}
