import { useParams } from "react-router-dom";

export default function Courseid() {
  const { courseid } = useParams();
  return <div className="text-center text-white">{courseid}</div>;
}
