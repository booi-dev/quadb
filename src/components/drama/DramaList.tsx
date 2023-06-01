import { useState, useEffect } from "react";
import useApi from "../../hook/useApi";

import { dramaDataType } from "../../type";

import DramaCard from "./DramaCard";

function DramaList() {
  const DRAMA_API = "https://api.tvmaze.com/search/shows?q=all";

  const { data, loading, error } = useApi<
    {
      score: number;
      show: dramaDataType;
    }[]
  >(DRAMA_API);

  const [dramaData, setDramaData] = useState<dramaDataType[]>([]);

  useEffect(() => {
    if (data) {
      const dataArray: dramaDataType[] = [];
      data.forEach((element) => {
        dataArray.push(element.show);
      });
      setDramaData(dataArray);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {dramaData?.map((drama) => (
        <DramaCard key={drama?.id} drama={drama} />
      ))}
    </div>
  );
}

export default DramaList;
