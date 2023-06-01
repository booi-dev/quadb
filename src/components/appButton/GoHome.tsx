import { useNavigate } from "react-router-dom";

import "./app-btn.css";

function GoHome() {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate("/");
  };

  return (
    <button className="go-home" onClick={handleBtnClick}>
      Go Home
    </button>
  );
}

export default GoHome;
