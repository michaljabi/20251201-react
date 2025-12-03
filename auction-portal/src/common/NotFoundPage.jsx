import { Link, useLocation } from "react-router";
import { PageLayout } from "../shared/PageLayout.jsx";

export function NotFoundPage() {

  const { pathname } = useLocation();

  return (
    <PageLayout title="404 Strona nie znaleziona">
      Strona <code>{pathname}</code> nie istnieje.
      <div className="mt-2">
        <Link className="btn btn-primary" to="/">
          Powrót do strony głównej
        </Link>
      </div>
    </PageLayout>
  );
}

