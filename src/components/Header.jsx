export default function Header() {
  return (
    <div className="header">
      <h2>Sebastian Vega</h2>

      {/* desktop nav: make reusable in footer */}
      <nav className="header__desktop-nav">
        <a>My Work</a>
        <a>In</a>
        <a>Github</a>
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
