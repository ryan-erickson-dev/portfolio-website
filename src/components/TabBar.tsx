import { useState } from "react";
import "./TabBar.css";

export default function TabBar() {
  const [active, setActive] = useState("About Me");

  function tabButtonOnClick(event: React.MouseEvent<HTMLButtonElement>) {
    (event.target as HTMLElement).style.backgroundColor = "blue";
    setActive((event.target as HTMLElement).textContent!);
  }

  return (
    <div className="tabBar">
      <button
        onClick={tabButtonOnClick}
        style={active === "About Me" ? { backgroundColor: "blue" } : {}}
      >
        About Me
      </button>

      <button
        onClick={tabButtonOnClick}
        style={active === "Experience" ? { backgroundColor: "blue" } : {}}
      >
        Experience
      </button>

      <button
        onClick={tabButtonOnClick}
        style={active === "Activity" ? { backgroundColor: "blue" } : {}}
      >
        Activity
      </button>

      <button
        onClick={tabButtonOnClick}
        style={active === "Projects" ? { backgroundColor: "blue" } : {}}
      >
        Projects
      </button>

      <button
        onClick={tabButtonOnClick}
        style={active === "Resume" ? { backgroundColor: "blue" } : {}}
      >
        Resume
      </button>
    </div>
  );
}
