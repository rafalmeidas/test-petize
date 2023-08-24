import { Outlet, useLocation } from "react-router-dom";

import Header from "../header";

export default function Main() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/" && pathname !== "/home" ? <Header /> : null}
      <main>
        <Outlet />
      </main>
    </>
  );
}
