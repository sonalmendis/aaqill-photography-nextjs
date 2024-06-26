import { Html, Head, Main, NextScript } from "next/document";
import { ParallaxProvider } from "react-scroll-parallax";
import Loader from "../Components/Loader";

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
