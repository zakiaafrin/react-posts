import React, { Component } from 'react';
import PostsApp from './PostsApp';

class App extends Component {

  render() {
    return (
      <div className="container py-5" >
        <PostsApp />
      </div >
    );
  }
}

export default App;