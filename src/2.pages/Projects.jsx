import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <>
      <section className="projects">
        <section className="projects-heading">
          <p onClick={() => navigate(-1)}>{" < Back"}</p>
          <h1>Projects</h1>
        </section>

        <div className="projects-grid">
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
          <div className="project"></div>
        </div>

        <p onClick={() => navigate(-1)}>{" < Back"}</p>
      </section>
    </>
  );
}
