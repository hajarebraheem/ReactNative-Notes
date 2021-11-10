import auth from './auth';
import notes from './notes';

import {combineReducers} from 'redux';

const allReducers = combineReducers({auth, notes});

export default allReducers;
