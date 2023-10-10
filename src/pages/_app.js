import { useState, useRef, useEffect } from "react";
import NextNProgress from "nextjs-progressbar";
import "@/styles/GlobalStyles.scss";
import Head from "next/head";
import { Abhaya_Libre } from "next/font/google";
import localFont from "next/font/local";
import dynamic from "next/dynamic";
import Router from "next/router";
import LoaderImg from "../../public/img/loader.svg";
import Loader from "@/Components/Loader";
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
  weight: "400",
  subsets: ["latin"],
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

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // if (!imagesLoaded) {
    //   console.log(imagesLoaded);

    //   document.getElementById("globalLoader").remove();
    //   document.querySelector(".introAnimationContainer").style.display = "none";
    //   document.querySelector(".homeWrapper").style.display = "block";
    //   document
    //     .querySelector(".openingLogo")
    //     .classList.add("basicOpacityReveal");

    //   document
    //     .querySelector(".mainOpeningImage")
    //     .classList.add("basicOpacityReveal");

    //   document.querySelector(".header").classList.add("basicOpacityReveal");
    // }

    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (imagesLoaded) {
        if (loader) {
          loader.remove();
        }
      }
    }
  });

  return (
    <>
      <Loader />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=yes"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>Aaqill Photography</title>
      </Head>

      <main className={`${SofiaPro.variable} ${AbhayaLibre.variable}`}>
        <ParallaxProvider>
          <Header />
          <Component setImagesLoaded={setImagesLoaded} {...pageProps} />
        </ParallaxProvider>
      </main>
    </>
  );
}
