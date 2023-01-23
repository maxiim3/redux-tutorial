import {createStore} from "redux";
import {reducer} from "./reducer";
import {Bug, initialState} from "../Bug";
import {devToolsEnhancer} from "redux-devtools-extension";

/**
 * The store is the object that brings them together. The store has the following responsibilities:
 * @type {Store<Bug[], Action>}
 */
const store = createStore(reducer as any,
                          initialState as Bug[],
                          devToolsEnhancer({trace: true, traceLimit: 25})
);

export default store;


type TStoreStructure = {
    entities: {
        bugs: [],
        projects: [],
        tags: []
    },
    auth: {
        userId: number
        name: string
    },
    ui: {
        // ...

    }
}