import { createStore, combineReducers, compose } from 'redux'
import { tableReducer } from './table/reducer';
export type RootState = ReturnType<typeof store.getState>

const rootReducer = combineReducers({
    stateRows: tableReducer
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    rootReducer,
    composeEnhancers()
)