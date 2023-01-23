import {Bugs} from "../Bug";

export enum ActionType {
    ADD_BUG = "ADD_BUG",
    DELETE_BUG = "DELETE_BUG",
    RESOLVE_BUG = "RESOLVE_BUG",
}

interface PayloadType {
    id: number,
    description: string,
    resolved: boolean
}

export interface Actions {
    type: ActionType;
    payload: PayloadType;
}

export let lastId = 3;

export interface IReducer {
    (state: Bugs, action: Actions): Bugs
}

/**
 * Reducer is a pure function that takes the previous state and an action, and returns the next state.
 * @param {Bugs} state
 * @param {Actions} action
 * @return {Bugs}
 */
export function reducer(state: Bugs, action: Actions): Bugs {
    switch (action.type) {
        case ActionType.ADD_BUG:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ]
        case ActionType.DELETE_BUG:
            return state.filter(bug => bug.id !== action.payload.id);
        case ActionType.RESOLVE_BUG:
            return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true})
        default:
            return state;
    }
}

