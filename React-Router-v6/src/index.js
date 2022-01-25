import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Home from "./Componenets/Home";
import Learn from "./Componenets/Learn";
import Course from "./Componenets/Course";
import Bundle from "./Componenets/Bundle";
import Courseid from "./Componenets/Courseid";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myapps" element={<Navigate replace to="/learn" />} />
        <Route path="/learn" element={<Learn />}>
          <Route path="course" element={<Course />}>
            <Route path=":courseid" element={<Courseid />} />
          </Route>
          <Route path="bundle" element={<Bundle />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
  rootElement
);
