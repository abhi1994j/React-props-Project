import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Project_1 from "./components/Project_1";
import Project_2 from "./components/Project_2";

function App() {
  return (
    <>
     
      <Navbar />
      <Routes>
        <Route path="/" element={<Project_1 />} />;
        <Route path="/project-2" element={<Project_2 />} />
      </Routes>
      {/* <Project_2/> */}
    </>
  );
}

export default App;
