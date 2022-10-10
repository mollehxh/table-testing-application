// RootState deliberately untyped to hide the structure of the state
// State should only be accessed through public model selectors
// All state can only be accessed in the app layer

export type RootState = Record<string, unknown>;
