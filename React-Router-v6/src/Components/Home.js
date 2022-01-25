import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      <h1>Home Route</h1>
      <Link to="myapps" className="btn border-white text-white">
        My Apps
      </Link>
    </div>
  );
};

export default Home;
