import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterContextProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/user_context";
// Domain
//dev-izjkzqorrx6jkz7j.us.auth0.com
// client id
// a83pgcOUsfeub6Zc5KBkm8SwLcVA096k

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-izjkzqorrx6jkz7j.us.auth0.com"
    clientId="a83pgcOUsfeub6Zc5KBkm8SwLcVA096k"
    redirectUri= {window.location.origin}
    authorizationParams={{
      redirect_uri: window.location.origin,
      cacheLocation: "localstorage",
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterContextProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterContextProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
