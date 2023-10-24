import { useState } from "react";
import like from "../assets/images/like.png";

export default function Hornedbeast(props) {
  const [favs, setFavs] = useState(0);

  function addFavs() {
    setFavs(favs + 1);
  }

  return (
    <div className="beast-container">
      <h2 key={props._id}>{props.title}</h2>
      <img
        key={props._id}
        src={props.image_url}
        alt={props.keyword}
        title={props.title}
      />
      <p key={props._id}>{props.description}</p>
      <p className="like-text">
        {favs}
        <span>
          <img onClick={addFavs} src={like} alt="like" />
        </span>
      </p>
    </div>
  );
}
