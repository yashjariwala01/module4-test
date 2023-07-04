import { POST_DETAILS } from "./actionTypes";

export const postDetails =(product)=>{
    return {
        type: POST_DETAILS,
        payload: product,
    }
}
