// All reducers have two arguments: the current state and the action
// So reducers are only ever called when an action occurs

// State argument is not app state, only the state this reducer is responsible for

// Most redux reducers are setup with javascript swith statements,
// where the switch statement is going to look at the action type,
// and if is the one we care about, we'll return a new state

// We must always return a non undefined value from the reducer, otherwise will throw an error

// es6 syntax: state = null meaning: if this argument is undefined, set it to null

// Our reducers needs to be connected into the combine reducer statement into ./index.js file

export default function(state = null, action) {

  switch (action.type) {

    case 'BOOK_SELECTED':
      return action.payload; /* the action.payload is the selected book */
      // We always want to return a fresh object !!
  }

  return state;

}
