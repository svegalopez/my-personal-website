import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link className="header__link" to="/">
        <h2>Sebastian Vega</h2>
      </Link>

      {/* desktop nav: make reusable in footer */}
      <nav className="header__desktop-nav">
        <Link className="header__link" to="/my-work">
          <span className="highlight">Projects</span>
        </Link>
        <a>
          <img
            className="header__desktop-nav-icon"
            src={process.env.PUBLIC_URL + "/linkedin.svg"}
          />
        </a>
        <a>
          <img
            className="header__desktop-nav-icon"
            src={process.env.PUBLIC_URL + "/github.svg"}
          />
        </a>
      </nav>
    </div>
  );
}
