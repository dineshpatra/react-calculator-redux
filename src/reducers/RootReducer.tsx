// This file is intended to combine all the
// reducer to single reducer. This can be done 
// in index.ts, but, when we use useState hook
// to access state, we will get messages like following:
// Property 'calculator' does not exist on type 'DefaultRootState'
import { combineReducers } from 'redux';
import CalculateReducer from './CalculateReducer';

export const RootReducer = combineReducers({
    calculator: CalculateReducer
});
export type RootState = ReturnType<typeof RootReducer>;