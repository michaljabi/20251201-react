import { Link, useLocation, useNavigate } from "react-router";
import { PageLayout } from "../shared/PageLayout.jsx";

export function NotFoundPage() {

  const location = useLocation();

  // Przykład: nawigowanie z poziomu kodu.
  const navigate = useNavigate();

  // https://react.dev/reference/rules
  // https://react.dev/reference/rules/rules-of-hooks
  if (location.pathname === "/easter-egg") {
    return <>HAHAHA</>;
  }

  return (
    <PageLayout title="404 Strona nie znaleziona">
      Strona <code>{location.pathname}</code> nie istnieje.
      <div>{JSON.stringify(location)}</div>
      <div className="mt-2">
        <Link className="btn btn-primary" to="/">
          Powrót do strony głównej
        </Link>
        <hr />
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/advices")}
        >
          Zobacz nasze artykuły
        </button>
      </div>
    </PageLayout>
  );
}
