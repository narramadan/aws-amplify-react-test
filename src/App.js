import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify, {API, graphqlOperation, Analytics} from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

import uuid4 from 'uuid4'

import {listBlogs} from './graphql/queries'
import {createBlog} from './graphql/mutations'

Amplify.configure(awsmobile);

class App extends Component {

  createBlogMutation = async() => {
    console.log('Creating Blog');
    const CreateBlogInput = {
      name: 'Blog-'+uuid4()
    };

    const newEvent = await API.graphql(graphqlOperation(createBlog, {
      input: CreateBlogInput
    }));
    Analytics.record('Blog is created');
    console.log('Blog is created: ',JSON.stringify(newEvent));
  }

  listBlogsQuery = async() => {
    console.log('listing blogs');
    const allBlogs = await API.graphql(graphqlOperation(listBlogs));
    Analytics.record('listing blogs');
    console.log('Available blogs:', JSON.stringify(allBlogs));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span>
            <button onClick={this.createBlogMutation}>Create new Blog</button>
            <button onClick={this.listBlogsQuery}>List all blogs</button>          
          </span>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
