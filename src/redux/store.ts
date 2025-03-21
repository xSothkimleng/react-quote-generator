import { createStore } from 'redux';
import quoteReducer from './reducers';

// Create the Redux store without middleware (no need for thunk)
const store = createStore(quoteReducer);

export default store;
