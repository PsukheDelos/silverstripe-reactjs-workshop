import React from 'react';
import $ from 'jquery';
import CommentComponent from './comment-component';
import CommentFormComponent from './comment-form-component';

class CommentManagerComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        $.getJSON(this.props.source, this.handleNewCommentData.bind(this));
    }

    render() {
        var comments = this.state.comments.map((comment, i) => {
            var props = {
                name: comment.name,
                date: comment.date,
                comment: comment.comment
            };

            return <CommentComponent key={i} {...props} />
        });

        return (
            <div className='comment-manager-component'>
                <CommentFormComponent />
                {comments}
            </div>
        );
    }

    handleNewCommentData(data) {
        this.setState({
            comments: data.comments
        });
    }
}

CommentManagerComponent.propTypes = {
    source: React.PropTypes.string.isRequired
}

export default CommentManagerComponent;
