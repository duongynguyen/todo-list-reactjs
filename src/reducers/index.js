import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import filterTable from './filterTable';
import itemEditting from './itemEditting';
import search from './search';
import sort from './sort';

const myReducer = combineReducers({
    tasks, // tasks : tasks
    isDisplayForm, // isDisplayForm : isDisplayForm
    filterTable,
    itemEditting,
    search,
    sort
});

export default myReducer;