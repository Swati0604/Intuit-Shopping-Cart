import { combineReducers } from "redux";
import reducers from "../reducers"; //add this line

const rootReducer = combineReducers({
  data: reducers
});

export default rootReducer;
