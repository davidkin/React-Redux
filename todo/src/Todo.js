import React from 'react';

const Todos = ({ todos, onDeleteItem }) => {
    const todosList = 
    todos.length ? (
        todos.map (
            todo => (
                <div 
                    className="collection-item" 
                    key={ todo.id }
                    onClick={ () => onDeleteItem(todo.id) }
                >
                    <span>{ todo.content }</span>
                </div>
            )
        )
    ) : (
     <p className="center">You have no todo's left</p>
    )

    return (
        <div className="todos collection">
            { todosList }
        </div>
    );
}

export default Todos;