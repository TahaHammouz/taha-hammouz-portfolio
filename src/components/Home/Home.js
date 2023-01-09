import "./Home.css";

const Home = () => {
  return (
    <section id="Home" className="main">
      <div>
        <h2>
          👋🏼 Hello, its <br />
          <span>
            Taha
            <br />
            Hammouz
          </span>
        </h2>
        <h3>An Enthusiastic Front-End Developer</h3>
      </div>
      <img
        className="programmer"
        src={require("../../assets/images/programmer.png")}
        alt="programmer"
      />
    </section>
  );
};

export default Home;
