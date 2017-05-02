// Redux: predictable state container for javascript applications
// State container meaning: a collection of all the data that describes the app

// Application is divided into two parts:
// 1. the data contained in the application
// 2. the views that display that data

// REDUX is the data in the app, REACT is the view

// React represents the views,
// which translates the app data into something that can be displayed on the screen
// and something that the user can actually interact with

// REDUX centralize all of the data into a single object,
// which we refer to as the State

// State in Redux = Application level state

// REDUX contains the state of the application,
// or the data that tells our components how or what they should render

// The most important part when creating a redux app is
// deciding how to design your state

/****************************************/

// A reducer is a function that returns a piece of the application state

// Our app can have many different states, so we can have many different reducers

// Reducers produce tha value of our state

// So, our reducer should return an array of books
// Step 1: Create the reducer
// Step 2: Wire it into our application

export default function () {
  return [

    { title: 'Javascript The Good Parts' },
    { title: 'ReactJS' },
    { title: 'You have got mail'},
    { title: 'Sleepless in Seatle'}

  ]
}
