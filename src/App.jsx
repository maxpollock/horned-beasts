import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import SelectedBeast from "./components/SelectedBeast";
import { useState } from "react";
import "./App.css";

function App() {
  const [modal, selectModal] = useState(false);
  const [imgData, setImgData] = useState("");

  function handleModal(image_url) {
    selectModal(!modal);
    setImgData(image_url);
  }

  return (
    <>
      <Header />
      <Gallery
        modal={modal}
        selectModal={selectModal}
        handleModal={handleModal}
      />
      {modal && <SelectedBeast handleModal={handleModal} imgData={imgData} />}
      <Footer />
    </>
  );
}

export default App;
