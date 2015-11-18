import React from 'react';


class CommentComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>

                <div className="col-sm-5 comment-component">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                      <strong>{this.props.name}</strong> <span className="text-muted">commented on:{this.props.date} </span>
                      </div>
                      <div className="panel-body">
                      {this.props.comment}
                      </div>
                      <div className="col-sm-12">
                        <a className="btn btn-default pull-left" href="">Spam: {this.props.isSpam}</a>
                        <a className="btn btn-default pull-left " href="">Delete: {this.props.isDelete}</a>

                      </div>
                    </div>

                </div>

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
