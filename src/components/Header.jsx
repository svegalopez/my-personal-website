import { Link } from "react-router-dom";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="header">
      <Link className="header__link" to="/">
        <h2>Sebastian Vega</h2>
      </Link>

      <NavBar />
    </div>
  );
}
