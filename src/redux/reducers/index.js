import { combineReducers } from 'redux';
import boards from './boards';
import players from './players';

export default combineReducers({ boards, players });
