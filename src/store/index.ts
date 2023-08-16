import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./rootReducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage
};

const middlewares = [thunk];

// if (process.env.NODE_ENV === `development`) {
//   const { logger } = require(`redux-logger`);

//   middlewares.push(logger);
// }

const persistedReducer = persistReducer(persistConfig, rootReducers);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(...middlewares));

  let persistor = persistStore(store);
  return { store, persistor };
};
