export function AuctionCard({auction}) {
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
          <button className="btn btn-primary">[ + ]</button>
        </div>
      </div>
    </div>
  );
}
