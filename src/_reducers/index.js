import { combineReducers } from 'redux';
import user from './user_reducer';

// 앞으로 만들 user 리듀서를 합쳐 rootReducer를 만들기
const rootReducer = combineReducers({
  user,
});

export default rootReducer;
