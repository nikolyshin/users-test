import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { filterReducer } from "./filterReducer";

export const rootReducer = combineReducers({
    users: usersReducer,
    filter: filterReducer
})