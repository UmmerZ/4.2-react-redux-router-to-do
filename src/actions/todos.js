/**
 * Redux Action(s)
 * Actions as "request" formatting, or labels for what
 * we'll allow in terms of requests or mutations for
 * our store.
 * Actions define what we'll allow as requests to our
 * reducers (which in turn, speak directly with the store
 * on our behalf.)
 * Action names, by convention, are uppercase (they are
 * considered "CONSTANTS.")
 */

// Think carefully for each action...
// What parameter (or data) do we need to pass it for it to complete...
// its job!?
const addNewToDo = toDoContent => {
  return {
    // This is the NAME of our action.
    // "type" is how our 'reducer' knows what we want to do.
    type: 'ADD_NEW_TO_DO',
    // This is the DATA we are passing through to the reducer...
    // so that IT can to ITS JOB!
    payload: toDoContent
  };
}

// Another action: remove a to-do!
// This time we don't need content - the To-Do already exists!
// We DO need to target it somehow though... so an ID will do the trick.
const removeToDo = id => {
  return {
    type: 'REMOVE_TO_DO',
    payload: id
  };
}

// If we want to use this in other files, we must export.
// !!! Curly braces let us, comma separated, add multiple exports.
export { addNewToDo, removeToDo };
