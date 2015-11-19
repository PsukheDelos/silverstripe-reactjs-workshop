import React from 'react';

class CommentActionComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {

        return (
            <div className='comment-action-component'>
              <button className="btn btn-success pull-left action-btn" data-btn-label={this.props.label} type="button" onClick={this.handleClick}>{this.props.label}</button>
            </div>
        );
    }

    handleClick(event) {
      var id = this.props.getCommentId();
      var comment = this.props.getCommentById(id);

      if(this.props.name=='delete'){
        console.log("delete");

        this.props.setActionState({
          isDelete: 1
        });
      }


      console.log('sending ajax request to: ' + this.props.endpoint);
      setTimeout(() => {
        alert('Update comment.');
      }, 2000);
    }

}

export default CommentActionComponent;
