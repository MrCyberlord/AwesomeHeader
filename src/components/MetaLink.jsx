import React from "react";
import "./MetaLink.css";

const MetaLink = ({ id, href, iconClass, text }) => (
  <a
    id={id}
    className="meta-link"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className={iconClass}></i>
    <span>{text}</span>
  </a>
);

export default MetaLink;
