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
    console.log(e.target);
    var test_author  = this.refs.author.getDOMNode().value.trim();

    

    //this.setState({text: e.target.value});
    // console.log("Author: " + this.state.author);
    // console.log("Email: " + this.state.password);
    // console.log("Website: " + this.state.website);
    // console.log("Text: " + this.state.text);
    // var content = form.querySelector('[name="content"]').value;
    // var author = this.refs.author.getDOMNode().value.trim();
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


  }
}

export default CommentFormComponent;
