import {applyMiddleware, combineReducers, createStore} from 'redux';
import {CountReducer} from "./count-reducer";
import thunk from "redux-thunk";
import {loadState, saveState} from "../utils/utils-localStorage";


// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    value: CountReducer
})

// непосредственно создаём store
export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof rootReducer>
store.subscribe(() => {
    saveState(store.getState())
})
export type AppStateType = ReturnType<typeof rootReducer>


//export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>
