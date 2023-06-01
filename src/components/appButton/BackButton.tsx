import { useNavigate } from "react-router-dom";
import "./app-btn.css";

function BackButton() {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleBtnClick} className="go-back-btn">
      Back
    </button>
  );
}

export default BackButton;
