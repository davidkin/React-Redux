import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';
import actions from '../engine/actions';
import { api } from '../config/api';

// axios.get('https://jsonplaceholder.typicode.com/posts')
//             .then(res => {
//                 this.setState({
//                     posts: res.data.slice(0, 10)
//                 })
//             }); 

class Home extends Component {

    componentDidMount() {
        const { getPosts } = this.props;
        getPosts();
    }
    
    render() {
        const { posts } = this.props;

        const postList = posts.length ? 
            (
                posts.map(post => (
                        <div className="post card" key={ post.id }>
                            <img src={ Pokeball } alt="Pokeball"/>

                            <Link to={`/${post.id}`} >

                                <div className="card-content">
                                    <span className="card-title red-text">{ post.title }</span>
                                    <p>{ post.body }</p>
                                </div>

                            </Link>

                        </div>
                    )
                )
            ) : (
                <div className="center">No posts yet</div>
            )
        
        return (
            <div className="container">
                <h4 className="center">Home</h4>

                { postList }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => {
            api.getPosts().then(res => {
                const posts = res.data.slice(0, 10);
                
                dispatch(actions.onGetPosts(posts));
            });
        }
    }
}


export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Home);