import { Header } from "./Header.jsx";
import { MainMenu } from "./MainMenu.jsx";
import { AuctionsPage } from "./auctions/AuctionsPage.jsx";

export function App() {
  const title = "Portal Aukcyjny";

  return (
    <>
      <Header appTitle={title} user={{ name: "Michał" }} />
      <main className="container">
        <MainMenu />
        <AuctionsPage />
      </main>
    </>
  );
}
