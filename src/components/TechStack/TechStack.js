import "./TechStack.css"
function TechStack() {
  return (
    <section id="TechStack" className="techs">
      <h4>
        <span>
          Tech <span>Stack</span>{" "}
        </span>
      </h4>
      <div className="used">
        <p>Technologies</p>
        <h2>already used</h2>
        <div className="alreadyused">
          <img src={require("../../assets/images/js.png")} alt="javascript logo" />
          <img src={require("../../assets/images/java.png")} alt="java logo" />
          <img src={require("../../assets/images/python.png")} alt="python logo" />
          <img src={require("../../assets/images/cpp.png")} alt="c++ logo" />
        </div>
      </div>
      <div className="learnmore">
        <p>Technologies</p>
        <h2>
          <span>
            {" "}
            Currently <span>Developing </span>
          </span>
        </h2>
        <div className="developing">
          <img src={require("../../assets/images/html.png")} alt="html logo" />
          <img src={require("../../assets/images/css.png")} alt="css logo" />
          <img src={require("../../assets/images/js.png")} alt="javascript logo" />
          <img src={require("../../assets/images/react.png")} alt="react logo" />
        </div>
      </div>
    </section>
  );
}

export default TechStack;
