import "./Projects.scss";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="grid">
        <ProjectCard
          body="A modern API built with Prisma, GraphQL and Typescript."
          title="Root 🌱"
          id="100"
        />
        <ProjectCard
          body="A React app shell to speed up development."
          title="Hermit 🐚"
          id="shell"
        />

        <ProjectCard
          body="A dummy description for this project."
          title="Tree Visualizer"
          id="302"
        />
      </div>
    </div>
  );
}
