import './index.css';

import { createStore } from 'redux';
import { todoApp } from './reducers/reducers';
import {addTodo, setVisibilityFilter, toggleTodo, VisibilityFilters} from "./actions/action";
const store = createStore(todoApp);

console.log(store.getState());
const unsubsribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducer'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
unsubsribe();
