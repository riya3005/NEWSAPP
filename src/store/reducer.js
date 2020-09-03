const initialstate = {
    newsCategory: 'business'
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'UPDATE NEWS CATEGORY':
            {
                return {
                    
                    ...state,
                    newsCategory : action.category

                }
                
            }
        
        default : {
            return state;
        }
    }
};

export default reducer;