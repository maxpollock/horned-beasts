import Hornedbeast from "./Hornedbeast";
import beasts from "../data.json";

export default function Gallery({ handleModal, modal, horns }) {
  const filteredBeasts = beasts.filter((beast) =>
    horns !== "" ? beast.horns == horns : true
  );

  return (
    <>
      {filteredBeasts.map((beast) => (
        <Hornedbeast
          key={beast._id}
          image_url={beast.image_url}
          title={beast.title}
          description={beast.description}
          keyword={beast.alt}
          handleModal={handleModal}
          modal={modal}
        />
      ))}
    </>
  );
}
