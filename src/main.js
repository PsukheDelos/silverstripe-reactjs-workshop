import React from 'react';
import CommentManagerComponent from './comment-manager-component';

var props = {
    source: 'data/comments.json'
};

React.render(
    <CommentManagerComponent {...props} />,
    document.getElementById('comment-manager-component-wrapper')
);
