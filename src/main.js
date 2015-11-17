import React from 'react';
import CommentManagerComponent from './comment-manager-component';

var props = {
    source: 'data/events.json'
};

React.render(
    <CommentManagerComponent {...props} />,
    document.getElementById('comment-manager-component-wrapper')
);
