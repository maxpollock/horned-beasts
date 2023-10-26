import Header from "./components/Header";
import Form from "./components/Form";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import SelectedBeast from "./components/SelectedBeast";
import { useState } from "react";
import "./App.css";

function App() {
  const [modal, selectModal] = useState(false);
  const [imgData, setImgData] = useState("");
  const [horns, setHorns] = useState("");

  function handleModal(image_url) {
    selectModal(!modal);
    setImgData(image_url);
  }

  return (
    <>
      <Header />
      <Form horns={horns} setHorns={setHorns} />
      <Gallery modal={modal} handleModal={handleModal} horns={horns} />
      {modal && <SelectedBeast handleModal={handleModal} imgData={imgData} />}
      <Footer />
    </>
  );
}

export default App;
