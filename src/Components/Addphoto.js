import React, { Component } from "react";

class Addphoto extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const imageLink = event.target.elements.link.value;
    const description = event.target.elements.description.value;
    const post = {
      id: Number(new Date()),
      description,
      imageLink
    };
    if (description && imageLink) {
      this.props.addPhoto(post);
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form">
          <input type="test" placeholder="Link" name="link" />
          <input type="test" placeholder="Description" name="description" />
          <button>post</button>
        </form>
      </div>
    );
  }
}

export default Addphoto;
