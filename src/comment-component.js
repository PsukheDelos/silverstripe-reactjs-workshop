import React from 'react';
// import ActionComponent from './action-component';

class CommentComponent extends React.Component {

    constructor(props) {
        super(props);

        // Move this to ActionComponent
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
      var buttons = [];

      for (let key in this.props.endpoints) {
        // buttons.puch(<ActionComponent />);
        buttons.push(<button key={key} ref={key} type="button" data-endpoint={this.props.endpoints[key]} onClick={this.handleClick}>{key}</button>);
      }

      return (
        <div>
          <div className='comment-component'>
            <h2 className="commentAuthor">{this.props.comment.comment}</h2>
          </div>
          {buttons}
        </div>
      );
    }

    // Move this to ActionComponent
    handleClick(event) {
      console.log(event.target);
    }
}

// CommentComponent.propTypes = {
//     name: React.PropTypes.string.isRequired,
//     date: React.PropTypes.string.isRequired,
//     comment: React.PropTypes.string.isRequired
// }

export default CommentComponent;
