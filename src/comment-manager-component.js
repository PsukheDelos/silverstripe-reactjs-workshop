import React from 'react';
import $ from 'jquery';
import CommentComponent from './comment-component';

class CommentManagerComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            events: []
        };
    }

    componentDidMount() {
        $.getJSON(this.props.source, this.handleNewCommentData.bind(this));
    }

    render() {
        var events = this.state.events.map((event, i) => {
            var props = {
                title: event.title,
                date: event.date,
                description: event.description
            };

            return <CommentComponent key={i} {...props} />
        });

        return (
            <div className='comment-manager-component'>
                {events}
            </div>
        );
    }

    handleNewCommentData(data) {
        this.setState({
            events: data.events
        });
    }
}

CommentManagerComponent.propTypes = {
    source: React.PropTypes.string.isRequired
}

export default CommentManagerComponent;
