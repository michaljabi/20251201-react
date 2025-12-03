import { createBrowserRouter, redirect } from "react-router";
import { App } from "./App.jsx";
import { AuctionsPage } from "./auctions/AuctionsPage.jsx";
import { PromotionsPage } from "./auctions/PromotionsPage.jsx";
import { AddAuctionPage } from "./auctions/AddAuctionPage.jsx";
import { CartPage } from "./auctions/CartPage.jsx";
import { AdvicesPage } from "./adivces/AdvicesPage.jsx";
import { NotFoundPage } from "./common/NotFoundPage.jsx";

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
        children: [
          // {
          //   path: ":uuid",
          //   element: <em> Auction detail </em>
          // }
        ],
      },
      {
        path: "promotions",
        element: <PromotionsPage />,
      },
      {
        path: "advices",
        element: <AdvicesPage />,
      },
      {
        path: "add-auction",
        element: <AddAuctionPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
