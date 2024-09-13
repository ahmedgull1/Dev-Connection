import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { addUserReducer, getDataReducer, profileReducer, userProfileReducers,updateuserReducer } from '../Reducers/reducer';
const rootReducer = combineReducers({
    adduser: addUserReducer,
   getData: getDataReducer,
   profile: profileReducer,
   userProfile: userProfileReducers,
   update: updateuserReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
