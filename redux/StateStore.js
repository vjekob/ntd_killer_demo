import { createStore, combineReducers } from "redux";
import { itemReducer } from "./itemReducer";
import { appReducer } from "./appReducer";

const rootReducer = combineReducers({
    item: itemReducer,
    app: appReducer
});

export const StateStore = createStore(rootReducer);