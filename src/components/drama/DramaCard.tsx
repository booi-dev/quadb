import { useNavigate } from "react-router-dom";
import { dramaDataType } from "../../type";

import "./styles/drama-card.css";

type DramaCardProps = {
  drama: dramaDataType;
};

function DramaCard({ drama }: DramaCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/drama/${drama.id}`);
    console.log(drama.id);
  };

  return (
    <button className="drama-card" onClick={handleCardClick}>
      <h1 className="drama-card__name">{drama.name}</h1>
      <h1 className="drama-card__rating">{drama.rating.average}</h1>
    </button>
  );
}

export default DramaCard;
