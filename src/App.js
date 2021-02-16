import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(Response => {
          this.setState({
            posts: Response.data
          })
        })
        .catch(Error => console.log(Error));
        
  }
  render() {
    let { posts } = this.state
    if(posts.length === 0){
      return <h1 style={{textAlign: 'center'}}> Loading ... </h1>
    } else {
      return (
        <div className='container'>
          <ul className="list-group">
             { posts.map(post => <li className='list-group-item' key={ post.id }>{post.title}</li>)}
          </ul>

        </div>
      )
    }
    
  }
}

export default App;
