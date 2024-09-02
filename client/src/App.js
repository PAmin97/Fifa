import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryPage from "./pages/CountryPage";
// import HomePage from "./pages/HomePage";
import Test from "./pages/Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/:country" element={<CountryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
