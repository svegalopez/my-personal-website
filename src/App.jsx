import "./1.styles/App.css";
import Home from "./2.pages/Home";
import Projects from "./2.pages/Projects";
import Header from "./3.components/Header";
import Footer from "./3.components/Footer";
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
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
