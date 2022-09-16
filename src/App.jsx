import "./styles/App.css";
import Home from "./pages/Home";
import MyWork from "./pages/MyWork";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="my-site">
      <Header />

      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-work" element={<MyWork />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
