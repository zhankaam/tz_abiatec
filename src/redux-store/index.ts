import {combineReducers, createStore} from 'redux';
import {appReducer} from './app-reducer';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

const rootReducer = combineReducers({
    app: appReducer
});

export type RootStateType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);

export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;

