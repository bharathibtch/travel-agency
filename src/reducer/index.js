import {  persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import TravelFilters from './TravelFilters';
import AuthReducer from './AuthReducer';

// BLACKLIST
const rootPersistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['travelFiltes'],
    stateReconciler : autoMergeLevel2,
    transforms:[]
};

const rootReducer = combineReducers({
    travelFilters: TravelFilters,
    auth: AuthReducer
});

export default persistReducer(rootPersistConfig,rootReducer);


