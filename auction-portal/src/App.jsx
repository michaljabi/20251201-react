import { Outlet } from "react-router";
import { Header } from "./common/Header.jsx";
import { MainMenu } from "./common/MainMenu.jsx";

export function App() {
  const title = "Portal Aukcyjny";

  return (
    <>
      <Header appTitle={title} user={{ name: "Michał" }} />
      <main className="container">
        <MainMenu />
        <Outlet />
      </main>
    </>
  );
}
