export default function NavBar() {
  return (
    <nav className="nav-bar">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/sebastian-vega-513618230"
      >
        <img
          alt=""
          className="nav-icon"
          src={process.env.PUBLIC_URL + "/linkedin.svg"}
        />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/svegalopez">
        <img
          alt=""
          className="nav-icon"
          src={process.env.PUBLIC_URL + "/github.svg"}
        />
      </a>
    </nav>
  );
}
