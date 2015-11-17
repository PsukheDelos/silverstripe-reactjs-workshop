import React from 'react';

class CommentComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='comment-component'>
                <h2>{this.props.name}</h2>
                <p>Date: {this.props.date}</p>
                <p>{this.props.comment}</p>
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
