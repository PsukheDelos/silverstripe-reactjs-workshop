import React from 'react';

class CommentFormComponent extends React.Component {

  render() {
    return (
        <div>
            <h3>Post your comment</h3>
            <h4>Your name</h4>
            <input type="text" />
            <h4>Your email address (will not be published)</h4>
            <input type="text" />
            <h4>Your website URL</h4>
            <input type="text" />
            <h4>Comments</h4>
            <input type="text" />
        </div>
    );
  }
}

export default CommentFormComponent;
