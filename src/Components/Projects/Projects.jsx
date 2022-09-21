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
          id="1038"
        />
        <ProjectCard
          body="A template for building client side apps with Hermit"
          title="Hermit Client"
          id="218"
        />

        <ProjectCard
          body="A tool for developing Hermit apps"
          title="Hermit Cli"
          id="164"
        />

        <ProjectCard
          body="A tool for deploying Hermit apps"
          title="Hermit Cloud"
          id="shell"
        />
      </div>
    </div>
  );
}
