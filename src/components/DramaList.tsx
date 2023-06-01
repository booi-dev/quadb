import { useState, useEffect } from "react";
import useApi from "../hook/useApi";

import DramaCard from "./DramaCard";

import dramaDataType from "../type";

const DRAMAAPIURL = "https://api.tvmaze.com/search/shows?q=all";

function DramaList() {
  const { data, loading, error } = useApi<
    {
      score: number;
      show: dramaDataType;
    }[]
  >(DRAMAAPIURL);

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

  console.log(data);

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
