import ReactIcon from "../../assets/react.svg";
import JavaScriptIcon from "../../assets/Javascript-logo.png";
import GitIcon from "../../assets/git.svg";
import Ts from "../../assets/ts.svg";
import Node from "../../assets/node.svg";
import "./TechIcons.css";

export const TechIcons = () => {
  return (
    <div className="icons-container">
      <img src={ReactIcon} alt="React" className="icon" />
      <img src={JavaScriptIcon} alt="JavaScript" className="icon" />
      <img src={Ts} alt="TypeScript" className="icon" />
      <img src={GitIcon} alt="Git" className="icon" />
      <img src={Node} alt="Node.js" className="icon" />
    </div>
  );
};
