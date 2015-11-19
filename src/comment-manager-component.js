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

        this.getCommentById = this.getCommentById.bind(this);
    }

    componentDidMount() {
        $.getJSON(this.props.source, this.handleNewCommentData.bind(this));
    }

    render() {
      var commentProps = {
        data: this.state.comments,
        endpoints: this.props.endpoints,
        getCommentById: this.getCommentById
      };

        return (
            <div className='comment-manager-component'>
                <CommentFormComponent />
                <CommentListComponent {...commentProps}/>
            </div>
        );
    }

    handleNewCommentData(data) {
        this.setState({
            comments: data.comments
        });
    }

    getCommentById(id) {
      console.log("getCommentById");
      // iterate comments and get the right one and return it.
    }
}

CommentManagerComponent.propTypes = {
    source: React.PropTypes.string.isRequired
}

export default CommentManagerComponent;
