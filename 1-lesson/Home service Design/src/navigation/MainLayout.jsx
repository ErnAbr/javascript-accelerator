import { Outlet } from "react-router-dom";
import { Topbar } from "../components/Topbar";

export function MainLayout() {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
}
