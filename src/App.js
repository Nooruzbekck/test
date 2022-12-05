import { HashRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./components/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import "react-toastify/dist/ReactToastify.css";
import TestBuilder from "./components/test/TestBuilder";
import Tema from "./components/test/Tema";
import Answer from "./components/answer/Answer";
import TotalScore from "./components/total/TotalScore";

function App() {
  return (
    <div className="App">
      <HashRouter>
        {/* <Header /> */}
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tema" element={<Tema />} />
          <Route path="/test-build" element={<TestBuilder />} />
          <Route path="/answer" element={<Answer />} />
          <Route path="/total_score" element={<TotalScore />} />
        </Routes>
        {/* <Footer /> */}
      </HashRouter>
    </div>
  );
}

export default App;
