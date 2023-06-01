import { useNavigate } from "react-router-dom";

import "./home.css";

function Home() {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate("./drama");
  };

  return (
    <div className="home">
      <h1 className="app-title">Home</h1>
      <h2 className="home__title"> Quad B Tech Assignment </h2>
      <button className="home__btn" onClick={handleBtnClick}>
        See Drama list
      </button>
    </div>
  );
}

export default Home;
