import "../styles/App.css";
import Home from "../pages/Home";
import MyWork from "../pages/MyWork";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (navType !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="my-site">
      <Header />

      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<MyWork />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
