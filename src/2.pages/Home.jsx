import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="hero">
        <div className="hero-img">
          <div className="bubble"></div>
        </div>
        <div className="hero-heading">
          <h1>I am Sebastian</h1>
          <h1>I build Software</h1>
        </div>
      </div>
      <section className="copy">
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
          to ProKnow, currently used in various large institutions around world.
        </p>
      </section>
      <section className="skills">
        <div className="logos-row">
          <img src={process.env.PUBLIC_URL + "/prisma.svg"} alt="" />
        </div>
        <div className="logos-row">
          <img src={process.env.PUBLIC_URL + "/js.svg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/ts.svg"} alt="" />
        </div>
        <div className="logos-row">
          <img src={process.env.PUBLIC_URL + "/gql.svg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/react.svg"} alt="" />
        </div>
        <div className="logos-row">
          <img src={process.env.PUBLIC_URL + "/node.svg"} alt="" />
        </div>
      </section>
      <section className="cta">
        <button>
          <Link to="/projects">Projects</Link>
        </button>
        <button>Philosophy</button>
        <button>Interests</button>
      </section>
    </>
  );
}
