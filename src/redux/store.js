import { combineReducers, legacy_createStore } from "redux";
import KatalogState from "./reducers/KatalogState";

let reducers = combineReducers({
    KatalogState
})

export let store = legacy_createStore(reducers)