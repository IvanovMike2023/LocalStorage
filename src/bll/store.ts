import {applyMiddleware, combineReducers, createStore} from 'redux';
import {CountReducer} from "./count-reducer";
import thunk from "redux-thunk";


// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    value: CountReducer
})
let preloaderState;
const persistedTodosString = localStorage.getItem('app-counter')
if (persistedTodosString) {
    preloaderState = JSON.parse(persistedTodosString)
}
// непосредственно создаём store
export const store = createStore(rootReducer, preloaderState, applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof rootReducer>
store.subscribe(() => {
    localStorage.setItem('app-counter', JSON.stringify(store.getState()))
})
export type AppStateType = ReturnType<typeof rootReducer>


//export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>
