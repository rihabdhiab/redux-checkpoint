import {createStore} from "redux";
import taskReducer from "./Reducers/taskReducers";
 export const store=createStore(taskReducer)