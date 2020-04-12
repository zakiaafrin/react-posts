import React, { Component } from 'react';
import axios from 'axios';


class PostsApp extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => console.log(error))
    }
    render() {
        let { posts } = this.state

        if (posts.length === 0) {
            return <h1 className='text-center'>Loading...</h1>
        } else {
            return (
                <div className='container'>
                    <ul className='list-group'>
                        {posts.map((post) =>
                            <li key={post.id} className='list-group-item'>
                                <span className='font-weight-bold'>{post.id}.
                                                         {post.title}</span><hr />
                                <p>{post.body}</p>
                            </li>
                        )}
                    </ul>
                </div>
            );
        }
    }
}
export default PostsApp;