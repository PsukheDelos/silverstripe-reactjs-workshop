import React from 'react';
import CommentManagerComponent from './comment-manager-component';

var wrapper = document.getElementById('comment-manager-component-wrapper');

var props = {
    source: 'data/comments.json',
    endpoints: {
      approve: wrapper.getAttribute('data-endpoint-approve'),
      spam: wrapper.getAttribute('data-endpoint-spam')
    }
};

React.render(
    <CommentManagerComponent {...props} />,
    wrapper
);
