import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PageLayout } from '../shared/PageLayout.jsx'; 
import { useFormik } from 'formik';

export function AddAuctionPage() {

  const formik = useFormik({
    initialValues: {
      title: '',
      price: 0,
      imgId: 12,
      descriprion: ''
    },
    validate: (values) => {
        const error = {};
        if(!values.title) {
          error.title = 'Tytuł musi być podany...';
        }
        return error;
    },
    onSubmit: (values) => {
        // wyślij formularz za pomocą AJAX
        // auctionsService.addOne({...})
        console.log(values);
    }
  });

  const imgPreviewUrl = "https://picsum.photos/id/" + formik.values.imgId + "/600/600";

  return (
    <PageLayout title="Dodaj aukcje">
      <section className="mt-2 row">
        <div className="col-6">
          <img
            className="img-thumbnail"
            alt="Podgląd fotografii"
            src={imgPreviewUrl}
          />
           { JSON.stringify(formik.values) }
        </div>
       
        <div className="col-6">
          <form onSubmit={formik.handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="auctionTitle">Nazwa aukcji</label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <FontAwesomeIcon icon="edit" />
                </span>
                <input id="auctionTitle" type="text" className="form-control" {...formik.getFieldProps('title')} />
              </div>
              {formik.errors.title && <div className="alert alert-danger">{formik.errors.title}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="img">Zdjecie</label>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <FontAwesomeIcon icon="image" />
                </span>
                <input id="img" type="number" className="form-control" {...formik.getFieldProps('imgId')} />
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
