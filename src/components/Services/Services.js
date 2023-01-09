import Card from "../UI/Card/Card";
import "./Services.css";
const Services = () => {
  return (
    <section className="cards" id="Services">
      <h2 className="title">Services</h2>
      <div className="content">
        <Card
          icon="code"
          title="Front-end design and development"
          description="Develop internet sites and web pages that combine text, sounds, pictures, graphics, and video clips"
        />
        <Card
          icon="pen-nib"
          title="UI UX design"
          description="Examine the functionalities and features of a web application by sketching the user interface"
        />
        <Card
          icon="video"
          title="Editing videos"
          description="Editing customer clips to meet their needs"
        />
      </div>
    </section>
  );
};
export default Services;
