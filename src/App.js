import MetaTags from "./components/MetaTags/MetaTags";
import Headers from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import "./App.css";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
const App = () => {
  return (
    <>
      <MetaTags />
      <Headers />
      <Home />
      <AboutMe />
      <Services/>
    </>
  );
};

export default App;
