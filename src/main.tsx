import { StrictMode } from "react";
import { Provider } from "react-redux";
import createStore from "./createReduxStore";
import "./index.css";
import App from "./App.tsx";
import { store } from "./core/store.js";
import { createRoot } from "react-dom/client";

// As of React 18
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
