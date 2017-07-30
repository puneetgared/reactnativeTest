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

});
