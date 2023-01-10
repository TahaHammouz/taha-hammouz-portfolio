import "./App.css";
import {MetaTags,Headers, AboutMe, Home, Services, TechStack,Footer} from "./components/index"
const App = () => {
  return (
    <>
      <MetaTags />
      <Headers />
      <Home />
      <AboutMe />
      <Services />
      <TechStack />
      <Footer />
    </>
  );
};

export default App;
