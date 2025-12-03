import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from './router.jsx'
import { store } from './store.js'
import { Provider } from 'react-redux';

import "./common/icons-config.js";
import "bootstrap/dist/css/bootstrap.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
