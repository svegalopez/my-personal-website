import "./Skills.scss";

export default function Skills() {
  return (
    <div className="skills">
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
    </div>
  );
}
