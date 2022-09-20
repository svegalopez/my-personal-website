import "./Projects.scss";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="grid">
        <ProjectCard
          body="A modern http API built with Prisma, GraphQL and Typescript."
          title="Web Api"
          id="100"
        />
        <ProjectCard
          body="An app shell to speed up development. Written in Typescript."
          title="App Shell"
          id="200"
        />

        <ProjectCard
          body="A dummy description for this project."
          title="Dummy"
          id="300"
        />
      </div>
    </div>
  );
}
