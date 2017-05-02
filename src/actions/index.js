// Changing our state is what actions and actions creators are for

// Whenever a user events happen, an action creator is called
// An ACTION CREATOR is a function that returns an action (object)
// The action has a type that describes the action that has just triggered
// Additional, the action might have some data that describes the action further

// Action is automatically returned to all reducers inside the app

// Reducers can choose, depending on the action, to return piece of state
// A switch statement is set up
// A reducer doesn't have to react on every different action
// WHatever is returned from the reducer, ends up as the new value of the state

// That newly returned state then gets attached into the application state,
// and then to our app which causes all of our components to rerender

// The new state is injected in all the containers and they rerender
