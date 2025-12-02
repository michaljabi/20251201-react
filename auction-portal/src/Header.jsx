const DEFAULT_USER = { name: "nieznany" };

export function Header({ appTitle = "Auction Portal", user }) {
  return (
    <div className="p-2 p-sm-3 p-lg-5 bg-warning">
      <h1>{appTitle}</h1>
      <h6>kupuj - sprzedawaj - zarabiaj</h6>
      {/* CONDITIONAL RENDERING: */}
      {user && "Zalogowany user to: " + user?.name}
      {/* wartości które nie renderują się w JSX ! */}
      {undefined} {null} {''} {false} {true}
      {/* powyżej w złożeniu user && - korzystamy z tej własnoci */}
    </div>
  );
}
