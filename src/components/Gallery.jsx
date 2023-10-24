import Hornedbeast from "./Hornedbeast";
import beasts from "../data.json";

export default function Gallery() {
  return (
    <>
      {beasts.map((beast) => (
        <Hornedbeast
          key={beast._id}
          image_url={beast.image_url}
          title={beast.title}
          description={beast.description}
          keyword={beast.alt}
        />
      ))}
    </>
  );
}
