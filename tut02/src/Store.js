import {thunk} from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { counterReducer } from "./reducers/counterReducer";


function configureStore(preloadedState) {
        const enhancers = [];
        
        let composeEnhancers = compose;

        const node_env = process.env.NODE_ENV;
        if (node_env === 'development') {
                enhancers.push(applyMiddleware(logger));

                composeEnhancers =
                        typeof window === 'object' &&
                                window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
                                window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                                }) : compose;
        }

        const middleware = [
                thunk,
        ];

        const composedEnhancers = composeEnhancers(applyMiddleware(...middleware), ...enhancers);
        return createStore(
                counterReducer,
                composedEnhancers
        );
}
export default configureStore