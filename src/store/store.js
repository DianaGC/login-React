import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducerUsers from "./reducers";

const store = createStore(
    reducerUsers,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;
