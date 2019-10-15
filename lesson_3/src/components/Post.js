import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../engine/actions';

class Post extends Component {
    // componentDidMount() {
    //     const id = this.props.match.params.post_id;
    //     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //         .then(res => {
    //             this.setState({
    //                 post: res.data
    //             })
    //         });
    // }

    handleClick = () => {
        const { 
            post, 
            deletePost, 
            history 
        } = this.props;

        deletePost(post.id);
        history.push('/');
    }

    render() {
        const { post } = this.props;

        const postBlock = post ? (
            <div className="post">
                <h4 className="center">{ post.title }</h4>
                <p>{ post.body }</p>

                <div className="center">
                    <button 
                        className="btn grey"
                        onClick={ this.handleClick }
                    >
                        Delete Post
                    </button>
                </div>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        )

        return (
            <div className="container">
                { postBlock }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.post_id;

    return {
        post: state.posts.find(post => post.id === +id )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: id => { dispatch(actions.onDeletePost(id)) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Post);