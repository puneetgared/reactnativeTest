import React, { View, Text } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CommentBox from '../CommentBox.js';
import CommentForm from '../CommentForm.js';
import CommentList from '../CommentList.js';



describe('<commentbox>', () => {
    beforeEach(function() {
        wrapper = shallow(<CommentBox/>);
    });

  it('should be a view component', () => {
      expect(wrapper.type()).to.equal(View);
  });

  it('should have a title Comment It', () => {
    expect(wrapper.contains(<Text>Comment It</Text>)).to.equal(true);
  });

  it('should render CommentList component',() =>{
    expect(wrapper.find(CommentList)).to.have.length(1);
  });

  it('should rednder CommentForm component',() =>{
    expect(wrapper.find(CommentForm)).to.have.length(1);
  });

  it('should have an initial state',() => {
    expect(wrapper.state('data').length).to.equal(0);
  });

  it('should pass its state data as props to commentList component',() => {
    expect(wrapper.find(CommentList).props().data).to.eql(wrapper.state('data'));
  });

  it('should pass its handleCommentSubmit method as props to CommentForm component',() =>{
    commentBox = new CommentBox();

    var definedMethod = commentBox.handleCommentSubmit;
    var passedMethod = wrapper.find(CommentForm).props().onCommentSubmit;
    expect(definedMethod.toString()).to.equal(passedMethod.toString());

  });
});
