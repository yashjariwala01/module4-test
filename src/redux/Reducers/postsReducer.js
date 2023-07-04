import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "../Actions/actionTypes";
import { fetchFailure } from "../Actions/apiActions";

const intialState={
    loading:false,
    data: [],
    error: '',
}

const postsReducer = (state=intialState, action)=>{
    switch (action.type) {
        case FETCH_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                loading:false,
                data: action.payload,
                error : '',
            }
        case fetchFailure:
            return{
                ...state,
                loading:false,
                data: [],
                error: action.payload,
            }
        default:
            return state;
    }
}

export default postsReducer;