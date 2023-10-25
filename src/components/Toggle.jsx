import { useState } from "react";

export default function ClickBtn({}) {
  const [toggle, changeToggle] = useState(true);

  function handleClick() {
    if (toggle === true) {
      document.getElementById("body").classList.toggle("dark");
      console.log("dark");
      changeToggle(!toggle);
    } else {
      document.getElementById("body").classList.toggle("light");
      console.log("light");
    }
  }

  return <button onClick={handleClick}>Toggle Me!</button>;
}
