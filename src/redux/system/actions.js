import { EMPLOYEE_LOGOUT, HIDE_LOADER, MANAGER_LOGOUT, SET_EMPLOYEE, SET_MANAGER, SET_USER, TOGGLE_LOADER, USER_LOGOUT } from "./actionTypes";

export function hideLoader(){
    return {
        type: HIDE_LOADER,
    }
}

export function toggleLoader(){
    return {
        type: TOGGLE_LOADER,
    }
}

export function setManager(payload){
    return {
        type: SET_MANAGER,
        payload,
    }
}
export function setUser(payload){
    return {
        type: SET_USER,
        payload,
    }
}
export function userLogout(){
    return {
        type: USER_LOGOUT,
    }
}
export function setEmployee(payload){
    return {
        type: SET_EMPLOYEE,
        payload,
    }
}

export function managerLogout(){
    return {
        type: MANAGER_LOGOUT,
    }
}
export function employeeLogout(){
    return {
        type: EMPLOYEE_LOGOUT,
    }
}