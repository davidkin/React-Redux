import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onAddItem(this.state);
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <label>Add new todo:</label>
                    <input type="text" onChange={ this.handleChange } value={ this.state.content } />

                    <button type="submit" className="btn">Add</button>
                </form>
            </div>
        )
    }
}

export default AddTodo;