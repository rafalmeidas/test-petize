import { Route, Routes } from "react-router-dom";

import Main from "../templates/main";
import Profile from "./profile";
import Home from "./home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="/:username" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
