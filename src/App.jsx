import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Copy from "./Components/Copy/Copy";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Copy />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
