export interface Bug {
    id: number;
    description: string;
    resolved: boolean;
}

export type Bugs = Bug[];
export const initialState: Bugs = [{
    id: 1,
    description: "Bug 1",
    resolved: false
},
    {
        id: 2,
        description: "Bug 2",
        resolved: false
    },
    {
        id: 3,
        description: "Bug 3",
        resolved: false
    },
]