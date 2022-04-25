import { Fragment, useEffect } from "react";
import PreLoader from "../src/layout/PreLoader";
import { aTagClick, portfolio_my_load, wowJsAnimation } from "../src/utilits";
import { GlobalStyle } from "../styles/GlobalStyles.js";

import "jarallax/dist/jarallax.css";
import "react-awesome-lightbox/build/style.css";
import "react-modal-video/css/modal-video.css";
import "react-responsive-modal/styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../public/css/colors.css";
import "../public/css/plugins.css";
import "../public/css/style.css";
import "react-awesome-lightbox/build/style.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    portfolio_my_load();
    wowJsAnimation();
    aTagClick();
  });
  return (
    <Fragment>
      <GlobalStyle />
      <PreLoader />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
