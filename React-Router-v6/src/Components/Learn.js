import { Link } from "react-router-dom";

const Learn = () => {
  return (
    <div className="text-white">
      <h1>Learn</h1>
      <h4>All courses are listed here</h4>
      <Link to="/learn/courses">Courses</Link>
      <Link to="/learn/bundle"> | Bundle</Link>
    </div>
  );
};

export default Learn;
