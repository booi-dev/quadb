type dramaDetailType = {
  id: number;
  name: string;
  summary: string;
  image: { original: string };
  premiered: string;
  genres: string[];
  rating: { average: number };
  status: string;
};

export default dramaDetailType;
