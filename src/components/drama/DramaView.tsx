import { useParams } from "react-router-dom";
import parser from "html-react-parser";

import useApi from "../../hook/useApi";
import { dramaDetailType } from "../../type";

import GoHome from "../appButton/GoHome";
import BackButton from "../appButton/BackButton";

import "./styles/drama-view.css";

function DramaView() {
  const params = useParams();

  console.log(params.dramaId);
  const dramaId = params.dramaId;

  const DRAMA_SHOW_API = `https://api.tvmaze.com/shows/${dramaId}`;

  const { data, loading, error } = useApi<dramaDetailType>(DRAMA_SHOW_API);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="drama-view">
      <div className="app-flex">
        <BackButton />
        <GoHome />
        <h1 className="app-title"> Drama Detail</h1>
      </div>

      <h2 className="app-title drama-view__title"> '{data?.name}' Detail </h2>
      <img src={data?.image.original} className="drama-view__image" />
      {data && <p className="drama-view__summary"> {parser(data.summary)} </p>}
      <div className="drama-view__more-info">
        <div>
          <b>Premiered</b> : {data?.premiered}{" "}
        </div>
        <div className="drama-view__genres">
          <b>Genres </b> :
          {data?.genres.map((genre) => (
            <div>{genre}</div>
          ))}
        </div>
        <div>
          <b> Rating </b> : {data?.rating.average}{" "}
        </div>
        <div>
          <b> Status </b> : {data?.status}{" "}
        </div>
      </div>
    </div>
  );
}

export default DramaView;
