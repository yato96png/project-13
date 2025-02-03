import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import UserDetail from "./UserDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/users/:user_id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
}
