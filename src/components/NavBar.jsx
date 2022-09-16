import { Link } from "react-router-dom";

export default function NavBar({ hideProjects }) {
  return (
    <nav className="header__desktop-nav">
      {hideProjects || (
        <Link className="header__link" to="/projects">
          <span className="highlight">Projects</span>
        </Link>
      )}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/sebastian-vega-513618230"
      >
        <img
          alt=""
          className="header__desktop-nav-icon"
          src={process.env.PUBLIC_URL + "/linkedin.svg"}
        />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/svegalopez">
        <img
          alt=""
          className="header__desktop-nav-icon"
          src={process.env.PUBLIC_URL + "/github.svg"}
        />
      </a>
    </nav>
  );
}
