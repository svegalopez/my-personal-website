import "../styles/App.css";
import Home from "../pages/Home";
import MyWork from "../pages/MyWork";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/my-personal-website/" element={<Home />} />
      <Route path="/my-personal-website/my-work" element={<MyWork />} />
    </Routes>
  );
}

export default App;
