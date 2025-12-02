import { createBrowserRouter, redirect } from "react-router";
import { App } from "./App.jsx";
import { AuctionsPage } from "./auctions/AuctionsPage.jsx";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      //   {
      //     path: "",
      //     element: <div>Wybierz stronę z menu..</div>,
      //   },
      {
        path: "",
        loader: () => redirect("/auctions"),
      },
      {
        path: "auctions",
        element: <AuctionsPage />,
      },
      {
        path: "promotions",
        element: <em>TODO...</em>,
      },
    ],
  },
]);
