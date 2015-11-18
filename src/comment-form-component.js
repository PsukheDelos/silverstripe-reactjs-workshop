import React from 'react';

class CommentFormComponent extends React.Component {

  render() {
    return (
        <div className="comment-form-component">
          <form className="commentForm" onSubmit={this.handleSubmit}>
            <p><input type="text" placeholder="Name" ref="author"/></p>
            <p><input type="email" placeholder="Email (will not be published)" ref="email"/></p>
            <p><input type="text" placeholder="Website" ref="website"/></p>
            <p><input type="text" placeholder="Say something..." ref="text"/></p>
            <p><input type="submit" value="Post" /></p>
          </form>
        </div>
    );
  }

  handleSubmit(e){
    e.preventDefault();
    // var author = this.refs.author.value.trim();
    // var website = this.refs.website.value.trim();
    // var text = this.refs.text.value.trim();
    // if (!text || !author || !email) {
    //   return;
    // }
    // this.props.onCommentSubmit({author: author, text: text});
    // this.refs.author.value = '';
    // this.refs.website.value = '';
    // this.refs.text.value = '';
    console.log("CommentFormComponent -> handleSubmit()");
  }
}

export default CommentFormComponent;
