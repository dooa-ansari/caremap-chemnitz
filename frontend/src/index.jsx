import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./localredux/store";
import { Provider } from "react-redux";
import "./internationalization/i18n";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import "bootstrap/dist/css/bootstrap.min.css";
import { CookiesProvider } from "react-cookie";


const root = ReactDOM.createRoot(document.getElementById("root"));

const persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </CookiesProvider>
  </React.StrictMode>
);
