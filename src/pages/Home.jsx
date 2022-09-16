import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className="hero">
        <div className="hero__heading">
          <h1>
            {/* Link to home */}I am{" "}
            <span className="highlight">Sebastian</span>
          </h1>
          <h1>I build Software</h1>
        </div>
      </section>

      <section className="home-image"></section>

      <section className="home-copy">
        <p>
          I am an enthusiastic full stack developer with 8 years of experience
          solving problems in various industries including consumer electronics,
          aviation, and medical device.
        </p>
        <p>
          My strongest skills are around node.js, react, SQL, typescript,
          API-development, testing, jest, cypress, event-driven systems, and
          AWS.
        </p>
        <p>
          My proudest achievement is to have contributed over 70 Pull Requests
          to{" "}
          <a
            className="home-copy__link"
            target="_blank"
            rel="noreferrer"
            href="https://proknow.com"
          >
            ProKnow
          </a>
          , currently used in various large institutions around world.
        </p>
      </section>

      <section className="home-cta">
        <button onClick={() => navigate("/projects")} className="home-cta__btn">
          Projects
        </button>
      </section>
    </>
  );
}
