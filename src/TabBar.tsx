import { MouseEventHandler, useState } from "react";
import "./TabBar.css";

function TabBar() {
  const [active, setActive] = useState("About");

  function tabButtonOnClick() {
    console.log("clicked");
  }

  return (
    <div className="tabBar">
      <button onClick={tabButtonOnClick}>About</button>
      <button>Projects</button>
      <button>Experience</button>
      <button>Resume</button>
    </div>
  );
}

export default TabBar;
