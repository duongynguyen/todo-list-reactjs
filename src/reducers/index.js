import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import filterTable from './filterTable';

const myReducer = combineReducers({
    tasks, // tasks : tasks
    isDisplayForm, // isDisplayForm : isDisplayForm
    filterTable,
});

export default myReducer;