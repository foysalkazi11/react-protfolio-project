import React from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";
Modal.setAppElement("#root");

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement')

function Popup({ modalIsOpen, setIsOpen, projectDis }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="popup">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>{projectDis.title}</h2>
        <button onClick={closeModal}>
          <GrFormClose className="icon-close" />
        </button>
        <img src={projectDis.img} alt={projectDis.title} />
        <p>
          {" "}
          <b>Technology Used :</b> {projectDis.technologyUse}
        </p>
        <b>Demo : </b>{" "}
        <Link
          to="#"
          className="hyper-link"
          onClick={() => window.open(projectDis.demoUrl, "_blank")}
        >
          {projectDis.demoUrl}
        </Link>
        <br />
        <b>Github : </b>{" "}
        <Link
          to="#"
          className="hyper-link"
          onClick={() => window.open(projectDis.demoUrl, "_blank")}
        >
          {projectDis.githubUrl}
        </Link>
      </Modal>
    </div>
  );
}

export default Popup;
