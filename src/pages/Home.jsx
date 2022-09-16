import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="hero">
        <div className="hero__img"></div>
        <div className="hero__heading"></div>
      </div>
    </div>
  );
}
