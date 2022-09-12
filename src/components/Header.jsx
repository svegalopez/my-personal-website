export default function Header() {
  return (
    <div className="header">
      <h2>Sebastian Vega</h2>

      {/* desktop nav: make reusable in footer */}
      <nav className="header__desktop-nav">
        <a>
          <span className="highlight">Projects</span>
        </a>
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

      {/* mobile nav */}
      {/* <nav>
        <ul>
          <li>
            <a href="">My Work</a>
          </li>
          <li>
            <a href="">In</a>
          </li>
          <li>
            <a href="">Github</a>
          </li>
        </ul>
      </nav> */}
    </div>
  );
}
