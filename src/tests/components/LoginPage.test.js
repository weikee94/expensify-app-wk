import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should correctly render LoginPage', () => {
    const wrapper = shallow();
});

test('should call startLogin on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<Login startLogin={startLogin} />);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});