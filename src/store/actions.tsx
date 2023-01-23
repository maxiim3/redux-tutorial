import {Actions, ActionType, lastId} from "./reducer";

// Action creators are functions that return an action object with a type and a payload
// We use them to dispatch actions to the store in the dispatch method
// example : store.dispatch(addBug("Bug 1"))
// example : store.dispatch(deleteBug(1))
// example : store.dispatch(resolveBug(1))

export const addBug = (description: string): Actions => ({
    type: ActionType.ADD_BUG,
    payload: {id: lastId, resolved: false, description}
});
export const resolveBug = (id: number): Actions => ({
    type: ActionType.RESOLVE_BUG,
    payload: {id, description: "", resolved: true,}
});
export const deleteBug = (id: number): Actions => ({
    type: ActionType.DELETE_BUG,
    payload: {id, description: "", resolved: false}
});