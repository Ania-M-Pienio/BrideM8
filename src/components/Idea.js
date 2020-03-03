import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Idea({ current, color, domain, url, icon }) {
  return (
    <div className="ideasPhotoPage">
      <img src={url} alt={domain + " photo idea for " + current}></img>
      <div className="ideasIconContainer">
        <button aria-label={domain}>
          <FontAwesomeIcon icon={icon} size="4x" className="ideaIco" />
        </button>
        <h3>{domain === "tableware" ? "table ware" : domain} </h3>
      </div>
    </div>
  );
}
export default Idea;
