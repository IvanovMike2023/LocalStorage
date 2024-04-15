import {applyMiddleware, combineReducers, createStore} from 'redux';
import {CountReducer} from "./count-reducer";
import thunk from "redux-thunk";


// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    tasks: CountReducer
})
// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppRootStateType = ReturnType<typeof rootReducer>

type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>



//export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>
