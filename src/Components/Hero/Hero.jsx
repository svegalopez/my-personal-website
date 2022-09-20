import "./Hero.scss";
import { Cpu } from "react-feather";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-img">
        <div className="bubble">
          <Cpu color="#393E41" />
        </div>
      </div>
      <div className="hero-headings">
        <h1>I am Sebastian</h1>
        <h1>I build Software</h1>
      </div>
    </div>
  );
}
