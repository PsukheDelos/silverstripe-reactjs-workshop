import React from 'react';

class CommentFormComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
        <div className="comment-form-component">
          <form className="commentForm" onSubmit={this.handleSubmit}>
            <p><input type="text" placeholder="Name" ref="author"/></p>
            <p><input type="email" placeholder="Email (will not be published)" ref="email"/></p>
            <p><input type="text" placeholder="Website" ref="website"/></p>
            <p><textarea type="text" placeholder="Say something..." ref="text" /></p>
            <p><input type="submit" value="Post"/></p>
          </form>
        </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("CommentFormComponent -> handleSubmit()");
  }
}

export default CommentFormComponent;
