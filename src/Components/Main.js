import React, { Component } from "react";
import Title from "./Title";
import Photowall from "./Photowall";
import Addphoto from "./Addphoto";
import { Route, Link } from "react-router-dom";
import { removePost } from "../redux/actions";

class Main extends Component {
  // constructor() {
  //   super();
  // this.state = {
  //   posts: []
  // };
  // this.removePhoto = this.removePhoto.bind(this);
  // this.addPhoto = this.addPhoto.bind(this);
  // }

  // removePhoto(postRemoved) {
  //   let newPosts = this.state.posts.filter(post => post.id !== postRemoved.id);
  //   this.setState({ posts: newPosts });
  //   //or
  //   //this.setState((state)=>({posts: state.posts.filter(post => post!== postRemoved)})
  // }

  // addPhoto(postSubmitted) {
  //   this.setState(state => ({
  //     posts: this.state.posts.concat([postSubmitted])
  //   }));
  // }

  render() {
    return (
      <div>
        <h1>
          <Link to="/">Photowall</Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Photowall
                {...this.props}
                /* equivalent to posts={this.props.posts}
                removePhoto={this.removePhoto}*/
              />
            </div>
          )}
        />

        <Route
          path="/Addphoto"
          render={({ history }) => <Addphoto {...this.props} />}
        />
      </div>
    );
  }
}
export default Main;
