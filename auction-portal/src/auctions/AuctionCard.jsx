/*
    To ma być DUMMY component - czyli taki, który NIE WIE, kto przesyla dane
    Ani kto odbiera callback
*/
// eslint-disable-next-line no-unused-vars
export function AuctionCard({auction, addToCart = (a) => {}}) {
 

  // jeśli tutaj Redux np. to ten komponent byłby SMART*  
  // const addToCart = (a) => {};

  return (
    <div className="card mt-3">
      <div className="card-header">{auction?.title}</div>
      <img
        className="card-img"
        src={auction?.imgUrl}
        alt={auction?.title}
      />
      <div className="card-body">
        <p className="card-text">{auction?.description}</p>
        <div className="d-flex justify-content-between align-content-center">
          <strong> {auction?.price} PLN</strong>
          <button className="btn btn-primary" onClick={() => addToCart(auction)}>
            [ + ]
          </button>
        </div>
      </div>
    </div>
  );
}
