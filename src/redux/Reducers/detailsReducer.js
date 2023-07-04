import { POST_DETAILS } from "../Actions/actionTypes";

const initialState= null;

const detailsReducer=(state=initialState, action)=>{
    switch (action.type) {
        case POST_DETAILS:
            return action.payload;
    
        default:
            return state;
    }
}
export default detailsReducer