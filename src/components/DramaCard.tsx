import dramaDataType from "../type";

type DramaCardProps = {
  drama: dramaDataType;
};

function DramaCard({ drama }: DramaCardProps) {
  return <div>{drama.name}</div>;
}

export default DramaCard;
