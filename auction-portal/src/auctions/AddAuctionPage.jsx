import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {PageLayout} from '../shared/PageLayout.jsx'; 

export function AddAuctionPage() {
  return (
    <PageLayout title="Dodaj aukcje">
      <section className="mt-2 row">
        <div className="col-6">
          <img
            className="img-thumbnail"
            alt="Podgląd fotografii"
            src={"https://picsum.photos/id/1/600/600"}
          />
        </div>
        <div className="col-6">
          <form>
            <div className="form-group">
              <label htmlFor="auctionTitle">Nazwa aukcji</label>
              <div className="input-group mb-3 ">
                <span className="input-group-text">
                  <FontAwesomeIcon icon="edit" />
                </span>
                <input id="auctionTitle" type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="img">Zdjecie</label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <FontAwesomeIcon icon="image" />
                </span>
                <input id="img" type="number" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="auctionDescription">Opis</label>
              <div className="input-group mb-3">
                <textarea
                  id="auctionDescription"
                  rows={5}
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="auctionPrice">Cena aukcji</label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <FontAwesomeIcon icon="tag" />
                </span>
                <input
                  id="auctionPrice"
                  type="number"
                  className="form-control"
                />
              </div>
            </div>
            <div className="text-right">
              <button className="btn btn-primary" type="submit">
                <FontAwesomeIcon icon="gavel" /> Dodaj aukcję
              </button>
            </div>
          </form>
        </div>
      </section>
    </PageLayout>
  );
}
