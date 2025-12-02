import { Header } from "./Header.jsx";

export function App() {

  const title = "Portal Aukcyjny?"

  return (
    <>
      <Header />
      <Header appTitle="To" />
      <Header appTitle="Portal Aukcyjny" />
      <Header appTitle={title} user={{name: 'Michał'}} />
    </>
  );
}
