import DramaList from "./DramaList";
import GoHome from "../appButton/GoHome";
import BackButton from "../appButton/BackButton";

function Drama() {
  return (
    <div>
      <div className="app-flex">
        <BackButton />
        <GoHome />
        <h1 className="app-title">Here are some cool dramas</h1>
      </div>
      <DramaList />
    </div>
  );
}

export default Drama;
