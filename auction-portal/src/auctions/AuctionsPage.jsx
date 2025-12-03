import { useEffect, useState } from "react";
import { auctionService } from './auctions-service'
import { AuctionCard } from "./AuctionCard.jsx";

export function AuctionsPage() {

  const [auctions, setAuctions] = useState([])

  const loadAuctions = () => setAuctions(auctionService.getAll());

  const addOneAuction = () => {
    // setAuctions(auctionService.getAll())
    const oneAuction = auctionService.getAll()[0];
    // To jest MUTOWANIE danych - tak to nie zadziała!
    // auctions.push(oneAuction);
    // Nie możesz do settera wrzucić Referencji do tego samego obiektu!
    // setAuctions(auctions);

    // to jest ok:
    setAuctions([...auctions, oneAuction])
  }

  useEffect(() => {
    console.log("AuctionsPage osadzone na stronie, czas pobrać aukcje...");
  }, []);

  return (
    <section>
      <h2>Lista naszych aukcji</h2>
      <button className="btn btn-success" onClick={loadAuctions}>
        Dodaj jedną aukcje
      </button>
      <div className="row">
        {
          auctions.map(a => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={a.id}> 
              <AuctionCard auction={a} addToCart={(a) => { console.log(a) }} />
            </div>
          ))
        }
      </div>
    </section>
  );
}