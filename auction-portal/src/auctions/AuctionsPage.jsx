import { useEffect } from "react";

export function AuctionsPage() {

  useEffect(() => {
    console.log("AuctionsPage osadzone na stronie, czas pobrać aukcje...");
  }, []);

  return (
    <section>
      <h2>Lista naszych aukcji</h2>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3"> (aukcja) </div>
      </div>
    </section>
  );
}
