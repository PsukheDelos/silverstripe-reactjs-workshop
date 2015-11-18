import React from 'react';

class CommentForm extends React.Component{
  constructor(props){
   super(props);
   this.onSubmit = this.onSubmit.bind(this);
 }
 componentDidMount(){
   React.findDOMNode(this.refs.itemName).focus();

 }
 render(){
   return (<form onSubmit={this.onSubmit}>
     <input ref="itemName" type="text" />
     <input ref="itemComment" type="text" />
     <input type="submit" value="Post" />
   </form>);
 }
 onSubmit(event){
   event.preventDefault();
   var input = React.findDOMNode(this.refs.itemName)
   var newItem = input.value;

   input.value = '';
   console.log(newItem );
 }
}

export default CommentForm;
