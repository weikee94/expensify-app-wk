import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpensesSummary';

test('should correctly render expense summary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={230}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render expense summary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={33} expensesTotal={23012304567}/>);
    expect(wrapper).toMatchSnapshot();
});