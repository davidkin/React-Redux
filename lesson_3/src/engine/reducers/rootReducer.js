
const initState = {
    posts: []
};

const rootReducer = (state = initState, action) => {
    const { type, payload } = action;
    
    switch(type) {
        case 'SET_STATE': {
            return {
                ...state,
                posts: payload
            }
        }
        case 'DELETE_POST': {
            const newPosts = state.posts.filter(post => post.id !== payload);
    
            return {
                ...state,
                posts: newPosts
            }
        }

        default: 
            return state
    }
}

export default rootReducer;