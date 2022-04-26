import { Fragment } from "react";
import Cursor from "../src/components/Cursor";
import Home from "../src/components/Home";
// import Portfolio from "../src/components/Portfolio";
// import Skills from "../src/components/Skills";
import Footer from "../src/layout/Footer";
import Header from "../src/layout/Header";
import PageHead from "../src/PageHead";

const Index = () => {
  return (
    <Fragment>
      <PageHead page="Home" />
      <div id="opened">
        <div className="portfolio_all_wrap" data-color="black">
          <Header />
          <Home />
          {/* <Portfolio /> */}
          {/* <Skills /> */}
          <Footer />
          <Cursor />
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
