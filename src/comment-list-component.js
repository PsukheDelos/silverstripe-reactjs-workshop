import React from 'react';
import CommentComponent from './comment-component';

class CommentListComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

      var commentNodes = this.props.data.map((comment, i) => {
        var props = {
          comment: comment,
          endpoints: this.props.endpoints
        };
        if(comment.isSpam===0 && comment.isDelete===0){
          return (
            <CommentComponent key={i} {...props} />
          );
        }
      });

      return (
          <div className='comment-list-component'>
            {commentNodes}
          </div>
      );
    }
}

export default CommentListComponent;
