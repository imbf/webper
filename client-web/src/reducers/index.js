import { combineReducers } from 'redux';
import authReducer from './authReducers';
import { reducer as formReducer } from 'redux-form';
import scrapReducer from './scrapReducer';
import dirReducer from './dirReducer';
import settingReducer from './settingReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    scraps: scrapReducer,
    dirs: dirReducer,
    setting: settingReducer
})