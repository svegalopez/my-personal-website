import "./ProjectCard.scss";

export default function ProjectCard({ title, body, pic_class, link }) {
  return (
    <a href={link} target="_blank" className="project-card">
      <div className={`project-card-img ${pic_class}`}></div>
      <div className="project-card-body">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-copy">{body}</p>
      </div>
    </a>
  );
}
