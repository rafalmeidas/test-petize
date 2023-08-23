import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppRoutes from "./pages/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
