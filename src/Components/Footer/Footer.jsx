import "./Footer.scss";
import { GitHub, Linkedin } from "react-feather";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/svegalopez" target="_blank">
        <GitHub className="icon" color="white" />
      </a>
      <a
        href="https://www.linkedin.com/in/sebastian-vega-513618230"
        target="_blank"
      >
        <Linkedin className="icon" color="white" />
      </a>
    </div>
  );
}
