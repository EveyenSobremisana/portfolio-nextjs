import { useState } from "react";
import { HomeModal } from "./ContentModal";
import Link from "next/link";
import Lottie from "react-lottie-player";
import lottieJson from "../../public/lottie/technology.json";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [modalValue, setModalValue] = useState({
    img: null,
    title: "",
  });
  const onOpenModal = (img, title) => {
    setOpen(true);
    setModalValue({ img, title });
  };
  const onCloseModal = () => {
    setOpen(false);
    setModalValue({ img: null, title: "" });
  };
  return (
    <div className="portfolio_section" id="home">
      <div className="portfolio_hero">
        <div className="container">
          <div className="content">
            <div className="left">
              <span className="name">Eveyen Sobremisana</span>
              <h3 className="job">Front End Developer</h3>
              <div className="short_info">
                <ul>
                  <li>
                    <div className="list_inner">
                      <Link href="https://github.com/EveyenSobremisana">
                        <a className="logo" target="_blank">
                          <img src="/img/logo/github.png" alt="" />
                        </a>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <Link href="https://www.linkedin.com/in/eveyen-sobremisana/">
                        <a className="logo" target="_blank">
                          <img src="/img/logo/linkedin.png" alt="" />
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="image">
                <Lottie loop animationData={lottieJson} play />
              </div>
            </div>
            {/* <div className="down anchor">
              <a href="#portfolio">
                <img className="svg" src="/img/svg/down-arrow.svg" alt="" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <HomeModal
        open={open}
        onCloseModal={() => onCloseModal()}
        img={modalValue.img}
        title={modalValue.title}
      />
    </div>
  );
};

export default Home;
