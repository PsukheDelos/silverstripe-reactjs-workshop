import React from 'react';

class CommentActionComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div className='comment-action-component'>
              <button type="button" onClick={this.handleClick}>{this.props.label}</button>
            </div>
        );
    }

    handleClick(event) {
      console.log(this.props.endpoint);
    }

}

export default CommentActionComponent;
