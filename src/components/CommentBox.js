import React, {Component, Text, View } from 'react-native';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';

export default class CommentBox extends React.Component {
  handleCommentSubmit(commentData){

  }

  constructor(props){
    super(props);
    this.state = {data:[]};
  }

  render() {
  return(
  <View>
  <Text>Comment It</Text>
  <CommentList data={this.state.data  }>
    <CommentForm onCommentSubmit={this.handleCommentSubmit}>
    </CommentForm>
  </CommentList>
  </View>
  );
  }
}
