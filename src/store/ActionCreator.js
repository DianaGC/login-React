import {
    GET_BOOKINGS,
    GET_BOOKINGS_ERROR,
    GET_BOOKINGS_SUCCESS,
    GET_TOKEN,
    GET_TOKEN_ERROR,
    GET_TOKEN_SUCCESS
} from "./actionTypes";
import {NodePath as axios} from "@babel/traverse";

export const getToken = (body) => {
    return (dispatch) => {
        dispatch({ type: GET_TOKEN });
        return axios.post('https://dev.tuten.cl/TutenREST/rest/user/testapis%40tuten.cl',body).then(
            user => dispatch({ type: GET_TOKEN_SUCCESS, user }),
            err => dispatch({ type: GET_TOKEN_ERROR, err })
        );
    };
};

export const getBookings = () => {
    return (dispatch) => {
        dispatch({ type: GET_BOOKINGS });
        return axios.get("https://dev.tuten.cl/TutenREST/#!/user/bookings").then(
            user => dispatch({ type: GET_BOOKINGS_SUCCESS, user }),
            err => dispatch({ type: GET_BOOKINGS_ERROR, err })
        );
    };
};
