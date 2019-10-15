const actions =  Object.freeze({
    onGetPosts: posts => ({
        type: 'SET_STATE',
        payload: posts
    }),
    
    onDeletePost: id => ({
        type: 'DELETE_POST',
        payload: id
    })
})

export default actions;