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
          <div className='comment-component col-sm-12'>
            <div className="panel panel-default">
                <div className="panel-heading">
                <strong>{this.props.comment.name}</strong> <span className="text-muted">{this.props.comment.date}</span>
                </div>

                <div className="panel-body">
                {this.props.comment.comment}
                </div>

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
