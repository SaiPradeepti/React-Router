import { Outlet } from "react-router-dom";

export default function Course() {
  return (
    <div>
      <div className="text-center text-white">Course</div>
      <Outlet />
    </div>
  );
}
