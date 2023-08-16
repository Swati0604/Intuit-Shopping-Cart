import AppRouter from "./AppRouter";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import configureStore from "./store";

let { store, persistor } = configureStore();

import "./styles/styles.scss";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
}
