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

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }));
    });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates));
    });
  };
};


// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

// asynchronous action to fetch data and dispatch set expenses
// export const startSetExpenses;
// 1. Fetch all expense data once
// 2. Parse that data into an array
// 3. Dispatch SET_EXPENSES
export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];
       snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
       });
       dispatch(setExpenses(expenses));
    });
  };
};

