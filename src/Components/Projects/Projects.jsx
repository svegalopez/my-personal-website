import "./Projects.scss";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="grid">
        <ProjectCard
          body="A library to build server side APIs in node.js."
          title="Hermit Server"
          pic_class="pic-164"
          link="https://github.com/svegalopez/hermit-server"
        />
        <ProjectCard
          body="A template for building client side apps with Hermit"
          title="Hermit Client"
          pic_class="hermit"
          link="https://github.com/svegalopez/hermit-client"
        />
      </div>
    </div>
  );
}
