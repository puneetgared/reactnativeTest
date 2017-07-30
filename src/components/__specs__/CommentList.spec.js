import React, { ListView } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CommentList from '../CommentList.js';
import Comment from '../Comment.js'

describe('<commentlist>', () => {

  beforeEach(function(){
    data = [
      {author : "Pete Hunt", text : "This is one comment"},
      {author : "Jordan Walke", text : "This is a super comment"},
      {author : "Puneet Kumar", text : "This is an ordinary comment"}
    ];
  });

  it('should define its propTypes',() =>{
    expect(CommentList.propTypes.data).to.be.an('function');
  })

  it('should be a ListView component', () => {
  const wrapper = shallow(<CommentList/>);
    expect(wrapper.type()).to.equal(ListView);
  });

  it('should have correct datasource in state',() =>{
      const wrapper = shallow(<CommentList data={data}/>);
      expect(wrapper.state('datasource')._dataBlob).to.equal(data);
  });
});
