const initialState = {
    userId: 0,
    user: {}
}

const rootReducer = (state = initialState, action) => {
 
    if (action.type == 'LOAD_USER') {
        state = {
            ...state,
            userId: action.payload
        }
        
    }
    if (action.type == 'LOAD_DETAILS') {
        state = {
            ...state,
            user: action.payload
        }
        
    }



    return state;

    console.log(userId)        
    console.log(user)        

}

export default rootReducer