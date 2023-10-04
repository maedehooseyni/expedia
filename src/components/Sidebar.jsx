import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";

function Sidebar() {
  return (
    <>
      <AppNav />
      <Outlet />
    </>
  );
}

export default Sidebar;
