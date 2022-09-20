import "./ProjectCard.scss";

export default function ProjectCard({ title, body, id }) {
  return (
    <a
      href="https://github.com/svegalopez"
      target="_blank"
      className="project-card"
    >
      <div className={`project-card-img pic-${id}`}></div>
      <div className="project-card-body">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-copy">{body}</p>
      </div>
    </a>
  );
}
