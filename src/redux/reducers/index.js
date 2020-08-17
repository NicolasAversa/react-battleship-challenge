import { combineReducers } from 'redux';
import board from './board';
import playersData from './playersData';

export default combineReducers({ board, playersData });
