import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import filterTable from './filterTable';
import itemEditting from './itemEditting';

const myReducer = combineReducers({
    tasks, // tasks : tasks
    isDisplayForm, // isDisplayForm : isDisplayForm
    filterTable,
    itemEditting
});

export default myReducer;