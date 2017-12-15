import uuid from 'uuid';
import database from '../firebase/firebase';

// 普通的时候
// component calls action generator
// action generator returns object
// component dispatch object
// redux store changes

// integrate with firebase 后必须使用redux middleware的thunk其中之一条件来返回function
// components calls action generator
// action generator returns function
// component dispatches function (?)
// function runs (has the ability to dispatch other action and do whatever it wants)

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref('expense').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  }
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
