import React, { Component } from 'react-native';
import { Provider } from 'react-redux';
import Root from './screens/root';
import store from './store/store';
import CommentBox from './components/CommentBox.js';

export default class App extends Component {
  render() {
    return (
      <CommentBox asyncStorageKey={'comments'}/>
      // <Provider store={store}>
      //   <Root />
      // </Provider>
    );
  }
}
