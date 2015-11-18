import React from 'react';

class CommentComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='comment-component'>
              <h2 className="commentAuthor">{this.props.name} - {this.props.date}</h2>
              {this.props.comment}
            </div>
        );
    }
}

CommentComponent.propTypes = {
    name: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired,
    comment: React.PropTypes.string.isRequired
}

export default CommentComponent;
