import {AnyAction, Dispatch} from "redux";
import {AppRootStateType} from "./store";

const initstate = {
    count: 10
}
type StateType = typeof initstate

export const CountReducer = (state: StateType = initstate, action: ActionType): StateType => {

    switch (action.type) {

        case'SET-COUNT':
            return {...state, count: state.count + 1}

        case'GET-COUNT':
            return {...state,count: action.count}

        default:
            return state
    }
}
export type ActionType = SetCountACType | GetCountACType

export type SetCountACType = ReturnType<typeof setCountAC>
export type GetCountACType = ReturnType<typeof getCountAC>
export const setCountAC = () => ({type: 'SET-COUNT'} as const)
const getCountAC = (count: number) => ({type: 'GET-COUNT', count} as const)


