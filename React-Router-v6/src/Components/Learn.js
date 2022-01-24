import { Link, Outlet } from "react-router-dom";

const Learn = () => {
  return (
    <div className="text-white text-center">
      <h1>Learn</h1>
      <h4 className="mt-4">All courses are listed here</h4>
      <Link
        to="/learn/course"
        className="btn btn-success text-white border-white"
      >
        Courses
      </Link>
      <Link
        to="/learn/bundle"
        className="ms-3 btn btn-primary text-white border-white"
      >
        Bundle
      </Link>
      <Outlet />
    </div>
  );
};

export default Learn;
