import { Hexagon1, Hexagon0 } from "../UI/Hexagon/Hexagon";
import "../../components/AboutMe/AboutMe.css";
const AboutMe = () => {
  return (
    <section className="Aboutme" id="About_me">
      <div className="whoiam">
        <img src={require("../../assets/images/taha.png")} alt="Taha Hammouz" />
        <h4>
          <span>
            &nbsp; Taha <span>Hammouz</span>{" "}
          </span>
        </h4>
        <p aria-description="Who is taha hammouz">
          I am a passionate self-taught Front-end web developer from Palestine.
          My passion for software lies in dreaming up ideas and implementing
          them with elegant interfaces. I take great care in the experience,
          architecture, and code quality of the things I build.
        </p>
        <h2>
          <span>
            Hard <span>Skills</span>{" "}
          </span>
        </h2>
      </div>

      <div className="skillsContainter">
        <div className="skills">
          <div className="box" aria-valuemax="5" aria-valuenow="3">
            <p>Python</p>
            <Hexagon1 />
            <Hexagon1 />
            <Hexagon1 />
            <Hexagon0 />
            <Hexagon0 />
          </div>
          <div className="box" aria-valuemax="5" aria-valuenow="4">
            <p>HTML</p>
            <Hexagon1 />
            <Hexagon1 />
            <Hexagon1 />
            <Hexagon1 />
            <Hexagon0 />
          </div>
          <div className="box" aria-valuemax="5" aria-valuenow="2">
            <p>React</p>
            <Hexagon1 />
            <Hexagon1 />
            <Hexagon1 />
            <Hexagon0 />
            <Hexagon0 />
          </div>
          <div className="box" aria-valuemax="5" aria-valuenow="3">
            <p>C++</p>
            <Hexagon1 />
            <Hexagon1 />
            <Hexagon1 />
            <Hexagon0 />
            <Hexagon0 />
          </div>
          <div className="box" aria-valuemax="5" aria-valuenow="3">
            <p>JavaSript</p>
            <Hexagon1 />
            <Hexagon1 />
            <Hexagon1 />
            <Hexagon0 />
            <Hexagon0 />
          </div>
          <div className="box" aria-valuemax="5" aria-valuenow="3">
            <p>CSS</p>
            <Hexagon1 />
            <Hexagon1 />
            <Hexagon1 />
            <Hexagon1 />
            <Hexagon0 />
          </div>
          <div className="box" aria-valuemax="5" aria-valuenow="3">
            <p>MySQL</p>
            <Hexagon1 />
            <Hexagon1 />
            <Hexagon1 />
            <Hexagon0 />
            <Hexagon0 />
          </div>
          <div className="box" aria-valuemax="5" aria-valuenow="2">
            <p>AWS</p>
            <Hexagon1 />
            <Hexagon1 />
            <Hexagon0 />
            <Hexagon0 />
            <Hexagon0 />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
