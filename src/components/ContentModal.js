import { Modal } from "react-responsive-modal";
export const NewsModal = ({ open, onCloseModal, img, title, date }) => {
  return (
    <Modal open={open} onClose={() => onCloseModal()} center>
      <div className="box_inner">
        <div className="description_wrap" style={{ padding: "30px" }}>
          <div className="news_popup_informations">
            <div className="image">
              <img src={img} alt="" />
            </div>
            <br />
            <div className="details" style={{ marginBottom: "20px" }}>
              {date && <span>{date}</span>}
              <h3>{title ? title : `VS Code Gets New JavaScript Debugger`}</h3>
              <div></div>
            </div>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                pellentesque libero lacus, eu consectetur enim ultrices non.
                Quisque elit leo, semper vel magna et, consequat faucibus dolor.
                Fusce pulvinar et nisl eu pharetra. In luctus mauris at magna
                posuere, at rutrum velit finibus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                pellentesque libero lacus, eu consectetur enim ultrices non.
                Quisque elit leo, semper vel magna et, consequat faucibus dolor.
                Fusce pulvinar et nisl eu pharetra. In luctus mauris at magna
                posuere, at rutrum velit finibus.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                pellentesque libero lacus, eu consectetur enim ultrices non.
                Quisque elit leo, semper vel magna et, consequat faucibus dolor.
                Fusce pulvinar et nisl eu pharetra. In luctus mauris at magna
                posuere, at rutrum velit finibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export const HomeModal = ({ open, onCloseModal, img, title, date }) => {
  return (
    <Modal open={open} onClose={() => onCloseModal()} center>
      <div className="box_inner">
        <div className="description_wrap" style={{ padding: "30px" }}>
          <div className="news_popup_informations">
            <div className="image">
              <img src={img} alt="" />
            </div>
            <br />
            <div className="details" style={{ marginBottom: "20px" }}>
              {date && <span>{date}</span>}
              <h3>{title ? title : `VS Code Gets New JavaScript Debugger`}</h3>
              <div></div>
            </div>
            <div className="hidden_content">
              <div className="popup_informations">
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi pellentesque libero lacus, eu consectetur enim
                    ultrices non. Quisque elit leo, semper vel magna et,
                    consequat faucibus dolor. Fusce pulvinar et nisl eu
                    pharetra. In luctus mauris at magna posuere, at rutrum velit
                    finibus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi pellentesque libero lacus, eu consectetur enim
                    ultrices non. Quisque elit leo, semper vel magna et,
                    consequat faucibus dolor. Fusce pulvinar et nisl eu
                    pharetra. In luctus mauris at magna posuere, at rutrum velit
                    finibus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi pellentesque libero lacus, eu consectetur enim
                    ultrices non. Quisque elit leo, semper vel magna et,
                    consequat faucibus dolor. Fusce pulvinar et nisl eu
                    pharetra. In luctus mauris at magna posuere, at rutrum velit
                    finibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
