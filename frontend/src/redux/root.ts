import { combineReducers, createStore } from "redux"
import task from "./task"

export const configureStore = () => {
    return createStore(
        combineReducers({
            task: task
        })
    )
}

