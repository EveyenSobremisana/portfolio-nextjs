import React, { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { newsSlider } from "../swiperSliderProps";
import { NewsModal } from "./ContentModal";

const News = () => {
  const [open, setOpen] = useState(false);
  const [modalValue, setModalValue] = useState({
    img: null,
    title: "",
    date: "",
  });
  const onOpenModal = (img, title, date) => {
    setOpen(true);
    setModalValue({ img, title, date });
  };
  const onCloseModal = () => {
    setOpen(false);
    setModalValue({ img: null, title: "", date: "" });
  };

  return (
    <Fragment>
      <div className="portfolio_section" id="news">
        <div className="portfolio_news">
          <div className="container">
            <div className="portfolio_main_title">
              <span>News</span>
              <h3>Latest News</h3>
            </div>
            <div className="news_list wow fadeInUp" data-wow-duration=".7s">
              <div className="slick-container">
                <div className="slick-wrapper">
                  <Swiper {...newsSlider}>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(/img/news/1.jpg)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>September 02, 2021</span>
                          <h3>VS Code Gets New JavaScript Debugger</h3>
                        </div>
                        <a
                          className="portfolio_full_link"
                          onClick={() =>
                            onOpenModal(
                              `img/news/1.jpg`,
                              "VS Code Gets New JavaScript Debugger",
                              "September 02, 2021"
                            )
                          }
                        ></a>
                        <div className="news_hidden_details">
                          <div className="news_popup_informations">
                            <div className="text">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi pellentesque libero
                                lacus, eu consectetur enim ultrices non. Quisque
                                elit leo, semper vel magna et, consequat
                                faucibus dolor. Fusce pulvinar et nisl eu
                                pharetra. In luctus mauris at magna posuere, at
                                rutrum velit finibus.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi pellentesque libero
                                lacus, eu consectetur enim ultrices non. Quisque
                                elit leo, semper vel magna et, consequat
                                faucibus dolor. Fusce pulvinar et nisl eu
                                pharetra. In luctus mauris at magna posuere, at
                                rutrum velit finibus.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi pellentesque libero
                                lacus, eu consectetur enim ultrices non. Quisque
                                elit leo, semper vel magna et, consequat
                                faucibus dolor. Fusce pulvinar et nisl eu
                                pharetra. In luctus mauris at magna posuere, at
                                rutrum velit finibus.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(/img/news/2.jpg)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>August 17, 2021</span>
                          <h3>Javalin Framework for Kotlin and Java Updated</h3>
                        </div>
                        <a
                          className="portfolio_full_link"
                          onClick={() =>
                            onOpenModal(
                              `img/news/2.jpg`,
                              "Javalin Framework for Kotlin and Java Updated",
                              "August 17, 2021"
                            )
                          }
                        ></a>
                        <div className="news_hidden_details">
                          <div className="news_popup_informations">
                            <div className="text">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi pellentesque libero
                                lacus, eu consectetur enim ultrices non. Quisque
                                elit leo, semper vel magna et, consequat
                                faucibus dolor. Fusce pulvinar et nisl eu
                                pharetra. In luctus mauris at magna posuere, at
                                rutrum velit finibus.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi pellentesque libero
                                lacus, eu consectetur enim ultrices non. Quisque
                                elit leo, semper vel magna et, consequat
                                faucibus dolor. Fusce pulvinar et nisl eu
                                pharetra. In luctus mauris at magna posuere, at
                                rutrum velit finibus.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi pellentesque libero
                                lacus, eu consectetur enim ultrices non. Quisque
                                elit leo, semper vel magna et, consequat
                                faucibus dolor. Fusce pulvinar et nisl eu
                                pharetra. In luctus mauris at magna posuere, at
                                rutrum velit finibus.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(/img/news/3.jpg)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>July 05, 2021</span>
                          <h3>JavaScript Dominated Open Source in 2021</h3>
                        </div>
                        <a
                          className="portfolio_full_link"
                          onClick={() =>
                            onOpenModal(
                              `img/news/3.jpg`,
                              "JavaScript Dominated Open Source in 2021",
                              "July 05, 2021"
                            )
                          }
                        ></a>
                        <div className="news_hidden_details">
                          <div className="news_popup_informations">
                            <div className="text">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi pellentesque libero
                                lacus, eu consectetur enim ultrices non. Quisque
                                elit leo, semper vel magna et, consequat
                                faucibus dolor. Fusce pulvinar et nisl eu
                                pharetra. In luctus mauris at magna posuere, at
                                rutrum velit finibus.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi pellentesque libero
                                lacus, eu consectetur enim ultrices non. Quisque
                                elit leo, semper vel magna et, consequat
                                faucibus dolor. Fusce pulvinar et nisl eu
                                pharetra. In luctus mauris at magna posuere, at
                                rutrum velit finibus.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi pellentesque libero
                                lacus, eu consectetur enim ultrices non. Quisque
                                elit leo, semper vel magna et, consequat
                                faucibus dolor. Fusce pulvinar et nisl eu
                                pharetra. In luctus mauris at magna posuere, at
                                rutrum velit finibus.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slick-slide">
                      <div className="list_inner">
                        <div className="image">
                          <img src="/img/portfolio/410-460.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(/img/news/4.jpg)",
                            }}
                          ></div>
                        </div>
                        <div className="overlay"></div>
                        <img
                          className="svg"
                          src="/img/svg/right-arrow.svg"
                          alt=""
                        />
                        <div className="details">
                          <span>April 22, 2021</span>
                          <h3>Perfecto Tests Progressive Web Apps</h3>
                        </div>
                        <a
                          className="portfolio_full_link"
                          onClick={() =>
                            onOpenModal(
                              `img/news/4.jpg`,
                              "Perfecto Tests Progressive Web Apps",
                              "April 22, 2021"
                            )
                          }
                        ></a>
                        <div className="news_hidden_details">
                          <div className="news_popup_informations">
                            <div className="text">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi pellentesque libero
                                lacus, eu consectetur enim ultrices non. Quisque
                                elit leo, semper vel magna et, consequat
                                faucibus dolor. Fusce pulvinar et nisl eu
                                pharetra. In luctus mauris at magna posuere, at
                                rutrum velit finibus.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi pellentesque libero
                                lacus, eu consectetur enim ultrices non. Quisque
                                elit leo, semper vel magna et, consequat
                                faucibus dolor. Fusce pulvinar et nisl eu
                                pharetra. In luctus mauris at magna posuere, at
                                rutrum velit finibus.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi pellentesque libero
                                lacus, eu consectetur enim ultrices non. Quisque
                                elit leo, semper vel magna et, consequat
                                faucibus dolor. Fusce pulvinar et nisl eu
                                pharetra. In luctus mauris at magna posuere, at
                                rutrum velit finibus.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>

                <div className="portfolio_swiper_progress fill">
                  <div className="my_pagination_in"></div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev">
                          <img
                            className="svg"
                            src="img/svg/right-arrow.svg"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a className="my_next">
                          <img
                            className="svg"
                            src="img/svg/right-arrow.svg"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsModal
        open={open}
        onCloseModal={() => onCloseModal()}
        img={modalValue.img}
        title={modalValue.title}
        date={modalValue.date}
      />
    </Fragment>
  );
};

export default News;
