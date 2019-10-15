const initState = {
    posts: [
        { id: 1, title: 'Start', body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates itaque, fugiat ratione dolorem facere modi quasi maiores illo laboriosam nemo neque id. Reiciendis neque earum nesciunt eligendi ipsa, numquam dolore.' },
        { id: 2, title: 'Middle', body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates itaque, fugiat ratione dolorem facere modi quasi maiores illo laboriosam nemo neque id. Reiciendis neque earum nesciunt eligendi ipsa, numquam dolore.' },
        { id: 3, title: 'End', body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates itaque, fugiat ratione dolorem facere modi quasi maiores illo laboriosam nemo neque id. Reiciendis neque earum nesciunt eligendi ipsa, numquam dolore.' },
    ]
};

const rootReducer = (state = initState, action) => {
    const { type, payload: id } = action;
    
    switch(type) {
        case 'DELETE_POST': {
            const newPosts = state.posts.filter(post => post.id !== id);
    
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