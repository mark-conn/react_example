import * as React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Home from './pages/home';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('Home', function() {
  it('Renders the sign in page', function() {
    const wrapper = shallow(<Home username={'Bill'} />); 
    const welcome = <h1 className='App-title'>Welcome Bill</h1>;
    expect(wrapper.contains(welcome)).to.equal(true);
  });
});