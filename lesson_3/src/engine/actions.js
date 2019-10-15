const actions =  Object.freeze({
    onDeletePost: id => ({
        type: 'DELETE_POST',
        payload: id
    })
})

export default actions;