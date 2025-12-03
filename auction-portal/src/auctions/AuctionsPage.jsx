import { useEffect, useState } from "react";
import { auctionService } from './auctions-service'
import { AuctionCard } from "./AuctionCard.jsx";

export function AuctionsPage() {

  // https://tanstack.com/query/latest/docs/framework/react/guides/queries
  const [auctions, setAuctions] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')

  const loadAuctions = async () => {
    setIsLoading(false);
    setErrorMessage('');
    try {
      setIsLoading(true);
      const auctions = await auctionService.getAll();
      setAuctions(auctions);
    } catch(e) {
      console.error(e);
      setErrorMessage(e.message);
    } finally {
       setIsLoading(false);
    }
  }

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
    // console.log("AuctionsPage osadzone na stronie, czas pobrać aukcje...");
    loadAuctions();
  }, []);

  return (
    <section>
      <h2>Lista naszych aukcji</h2>
      { 
      /* <button className="btn btn-success" onClick={loadAuctions}>
        Dodaj jedną aukcje
      </button>*/
      }
      <div className="row">
        { isLoading && <div className="col-12 alert alert-info">Ładuje aukcje...</div> }
        { errorMessage && <div className="col-12 alert alert-danger">{errorMessage}</div> }
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