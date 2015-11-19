import React from 'react';
import CommentManagerComponent from './comment-manager-component';

var wrapper = document.getElementById('comment-manager-component-wrapper');

var props = {
    source: 'data/comments.json',
    endpoints: [
      {
        label: 'Approve',
        name: 'approve',
        endpoint: wrapper.getAttribute('data-endpoint-approve')
      },
      {
        label: 'Spam',
        name: 'spam',
        endpoint: wrapper.getAttribute('data-endpoint-spam')
      },
      {
        label: 'Delete',
        name: 'delete',
        endpoint: wrapper.getAttribute('data-endpoint-delete')
      }
    ]
};

React.render(
    <CommentManagerComponent {...props} />,
    wrapper
);
