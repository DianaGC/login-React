import {GET_TOKEN} from "./actionCreators";

const initialState = {
    token :""
}

const reducerUsers = (state= initialState, action) => {
    switch (action.type){
        case GET_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        default:
            return state
    }

};

export default reducerUsers
