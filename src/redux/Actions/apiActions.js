import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "./actionTypes";

export const fetchRequest =()=>{
    return {
        type: FETCH_REQUEST,
    }
}

export const fetchSuccess =(data)=>{
    return{
        type: FETCH_SUCCESS,
        payload: data,
    }
}

export const fetchFailure =(error)=>{
    return{
        type: FETCH_FAILURE,
        payload: error,
    }
}

export const fetchPost =()=>{
    return (dispatch)=>{
        dispatch(fetchRequest());
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=> response.json())
        .then(data=>{
            dispatch(fetchSuccess(data))
            console.log(data)})
        .catch(error=> dispatch(fetchFailure(error)))
    }
}