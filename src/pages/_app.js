import { useState, useRef, useEffect } from "react";
import NextNProgress from "nextjs-progressbar";
import "@/styles/GlobalStyles.scss";
import Head from "next/head";
import { Abhaya_Libre } from "next/font/google";
import localFont from "next/font/local";
import dynamic from "next/dynamic";
import Router from "next/router";
import LoaderImg from "../../public/img/loader.svg";
import Image from "next/image";
// import { ParallaxProvider } from "react-scroll-parallax";
import Header from "@/Components/Header";
const ParallaxProvider = dynamic(
  () => import("@/Components/ParallaxProvider"),
  { ssr: false }
);

// How to import from GoogleFonts:
const AbhayaLibre = Abhaya_Libre({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font1",
});

// How to import from local:
const SofiaPro = localFont({
  src: "../../public/Fonts/sofiapro-light-webfont.woff2",
  formats: ["woff2"],
  variable: "--font2",
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.remove();
    }
  });

  return (
    <>
      <NextNProgress
        transformCSS={(css) => {
          // css is the default css string. You can modify it and return it or return your own css.
          return <style>{`background: red`}</style>;
        }}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Aaqill Photography</title>
      </Head>
      <div id="globalLoader">
        <Image
          priority={true}
          width={300}
          height={300}
          src={LoaderImg.src}
          alt=""
        />
      </div>
      <main className={`${SofiaPro.variable} ${AbhayaLibre.variable}`}>
        <ParallaxProvider>
          <Header />
          <Component {...pageProps} />
        </ParallaxProvider>
      </main>
    </>
  );
}
