import { combineReducers } from 'redux';
import componentesReducers from './componentesReducers';

export default combineReducers({
    componentes: componentesReducers
});