import { HIDE_LOADER, SET_MANAGER, TOGGLE_LOADER, SET_EMPLOYEE, MANAGER_LOGOUT, EMPLOYEE_LOGOUT, SET_USER, USER_LOGOUT } from "./actionTypes";

const initialState = {
    loading: false,
    employee: {},
    manager: {},
    isLogin: false,
    token: '',
}

export function systemReducer(state = initialState, action){
    switch (action.type) {
        case TOGGLE_LOADER:
        return {
            ...state, loading: true
        }            
        case HIDE_LOADER:
            return {
                ...state, loading: false
            }
        case SET_MANAGER: 
            return {
                ...state, isLogin: true, manager: action.payload
            }
        case SET_USER:
            return {
                ...state, isLogin: true, manager: action.payload
            }
        case USER_LOGOUT:
            return {
                ...state, isLogin: false, manager: {}
            }
        case SET_EMPLOYEE:
            return {
                ...state, isLogin: true, employee: action.payload
            }
        case MANAGER_LOGOUT:
            return {
                ...state, manager: {}, isLogin: false, token: "", loading: false,
            }
        case EMPLOYEE_LOGOUT:
            return {
                ...state, employee: {}, isLogin: false, token: "", loading: false,
            }

        
        default:
            return state
    }
}