import { Navigate, Route, Routes } from "react-router-dom";

import Main from "../templates/main";
import Profile from "./profile";
import Home from "./home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route index path="/home" element={<Home />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
