import "./Footer.scss";
import { GitHub, Linkedin } from "react-feather";

export default function Footer() {
  return (
    <div className="footer">
      <GitHub className="icon" color="white" />
      <Linkedin className="icon" color="white" />
    </div>
  );
}
