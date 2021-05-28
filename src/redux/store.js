import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const initialstate={};

const middleware=[thunk];

const store=createStore(
    rootReducer,
    initialstate,
    compose(
        applyMiddleware(...middleware),
        //window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
      
    )
)

export default store;