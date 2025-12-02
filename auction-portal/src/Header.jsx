const DEFAULT_USER = {name: 'nieznany'};


export function Header({appTitle = "Auction Portal", user}) {
  return (
    <div className="p-2 p-sm-3 p-lg-5 bg-warning">
      <h1>{appTitle}</h1>
      <h6>kupuj - sprzedawaj - zarabiaj</h6>
      Zalogowany user to: {user?.name}
    </div>
  );
}
