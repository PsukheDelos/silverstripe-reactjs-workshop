import React from 'react';
import CommentComponent from './comment-component';

class CommentListComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
      var commentNodes = this.props.data.map((comment, i) => {
        return (
          <CommentComponent key={i} {...comment}/>
        );
      });
      return (
          <div className='comment-list-component'>
            {commentNodes}
          </div>
      );
    }
}

export default CommentListComponent;
