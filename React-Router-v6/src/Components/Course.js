import { Outlet, NavLink } from "react-router-dom";

export default function Course() {
  const courses = ["react", "angular", "vue", "nodejs"];
  const randomCourse = courses[Math.floor(Math.random() * courses.length)];
  return (
    <div>
      <div className="text-center text-white">Course</div>
      <NavLink to={`/learn/courses/${randomCourse}`}>{randomCourse}</NavLink>
      <br />
      <NavLink to={`/learn/courses/tests`}>tests</NavLink>
      <Outlet />
    </div>
  );
}
