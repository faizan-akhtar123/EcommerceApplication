const initialState={
    products:[],
    cartData:[]
}

export const Productreducer=(state=initialState, action)=>{
    console.log(action)
    switch(action.type){
        default:
        return state;
    }
    
}