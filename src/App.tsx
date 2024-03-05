import { Route, Routes, HashRouter } from "react-router-dom";

import AppRoutes from "./pages/AppRoutes";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
