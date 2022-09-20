import "./Header.scss";
import { GitHub, Linkedin } from "react-feather";

export default function Header() {
  return (
    <div className="header">
      <GitHub className="icon" color="white" />
      <Linkedin className="icon" color="white" />
    </div>
  );
}
