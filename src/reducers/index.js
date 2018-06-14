import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import itemEditting from './itemEditting';

const myReducer = combineReducers({
    tasks, // tasks : tasks
    isDisplayForm, // isDisplayForm : isDisplayForm
    itemEditting
});

export default myReducer;