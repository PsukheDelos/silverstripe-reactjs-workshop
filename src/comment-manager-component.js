import React from 'react';
import $ from 'jquery';
import CommentFormComponent from './comment-form-component';
import CommentListComponent from './comment-list-component';

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
        return (
            <div className='comment-manager-component'>
                <CommentFormComponent />
                <CommentListComponent data={this.state.comments}/>
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
