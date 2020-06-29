import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import rootReducer from './rootReducer'



const store = createStore(rootReducer, applyMiddleware(ReduxThunk));



export default store;