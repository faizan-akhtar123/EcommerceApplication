import { ACTION_TYPE } from "../type/Actiontype"

export const addtocart=(product)=>{
    return {type:ACTION_TYPE.ADD_TO_CART, payload: product} 
}
export const removetocart=(id)=>{
    return {type:ACTION_TYPE.REMOVE_TO_CART, payload: id} 
}