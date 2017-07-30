import React, {Component,View,TouchableNativeFeedback,Text,TextInput} from 'react-native';

export default class CommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: '',comment : ''};
  }

  static propTypes = {
    onCommentSubmit: React.PropTypes.func
  };

  render(){
    return (
      <View>
        <TextInput placeholder="name"
                    key="name"
                    style={{height:40, bordercolor: 'gray', borderwidth: 1}}
                    onChangeText={ (text) => this.setState({name: text})}
                    onChange={(name) => this.setState({name})}
                      value={this.state.name} />
        <TextInput placeholder="comment"
                  key="comment"
                  style={{height:40, bordercolor: 'gray', borderwidth: 1}}
                    onChangeText={(content) => this.setState({comment:content})}
                    onChange={(comment) => this.setState({comment})}
                     value={this.state.comment} />
      <TouchableNativeFeedback onPress={() => this.onPressButton()}>
        <View style={{width: 150, height: 100, backgroundcolor: 'red'}}>
        <Text style={{margin: 30}}>Submit</Text>
        </View>
      </TouchableNativeFeedback>
      <TextInput></TextInput>
      </View>
    );
  }

  onPressButton(){
      var author = this.state.name.trim();
      var comment = this.state.comment.trim();
      this.state = {name: '',comment : ''};
      this.props.onCommentSubmit({author: author , text: comment});
  }
}
