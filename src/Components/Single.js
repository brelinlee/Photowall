import React, { Component } from "react";
import Photo from "./Photo";

class Single extends Component {
  render() {
    const { match, posts } = this.props;
    const id = Number(match.params.photoId);

    const post = posts.find(post => post.id === id);
    return (
      <div className="single-photo">
        <Photo post={post} post={post} />
      </div>
    );
  }
}

export default Single;
