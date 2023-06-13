import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./reducers/counter-reducer";
import {settingsReducer} from "./reducers/settings-reducer";


const rootReducer = combineReducers({
    counter: counterReducer,
    settings: settingsReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>