import React from 'react';
import CommentActionComponent from './comment-action-component';

class CommentComponent extends React.Component {

    constructor(props) {
        super(props);



    }

    render() {


      var buttons = this.props.endpoints.map((endpoint, i) => {
        var props = {
          key: i,
          endpoint: endpoint.endpoint,
          label: endpoint.label
        };

        return (
          <CommentActionComponent {...props} />
        );
      });

      return (
        <div>
          <div className='comment-component'>
            <h2 className="commentAuthor">{this.props.comment.comment}</h2>
          </div>
          {buttons}
        </div>
      );
    }


}

// CommentComponent.propTypes = {
//     name: React.PropTypes.string.isRequired,
//     date: React.PropTypes.string.isRequired,
//     comment: React.PropTypes.string.isRequired
// }

export default CommentComponent;
