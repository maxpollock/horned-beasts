import { useState } from "react";
import like from "../assets/images/like.png";

export default function Hornedbeast({
  key,
  image_url,
  title,
  description,
  keyword,
}) {
  const [favs, setFavs] = useState(0);

  function addFavs() {
    setFavs(favs + 1);
  }

  return (
    <div className="beast-container">
      <h2 key={key}>{title}</h2>
      <img key={key} src={image_url} alt={keyword} title={title} />
      <p key={key}>{description}</p>
      <p className="like-text">
        {favs}
        <span>
          <img onClick={addFavs} src={like} alt="like" />
        </span>
      </p>
    </div>
  );
}
