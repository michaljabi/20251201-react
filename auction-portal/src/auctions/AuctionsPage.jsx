import { useEffect } from "react";
import { auctionService } from './auctions-service'
import { AuctionCard } from "./AuctionCard.jsx";

export function AuctionsPage() {

  useEffect(() => {
    console.log("AuctionsPage osadzone na stronie, czas pobrać aukcje...");
  }, []);

  const auction = auctionService.getAll()[0];

  return (
    <section>
      <h2>Lista naszych aukcji</h2>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3"> 
          { JSON.stringify(auction) }  
          <AuctionCard auction={auction} />
        </div>
      </div>
    </section>
  );
}