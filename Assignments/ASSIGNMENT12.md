# `useContext` vs `Redux`?

- In React, `useContext` and `Redux` both approaches provide ways to manage and share state across components. Both work and manage global data to share and access from any component present in the application DOM tree, but they have different purposes and use cases.

- `useContext`: `useContext` is a hook that provides a way to pass data through the component tree without manually passing props down through each nested component. It is designed to share data that can be considered global data for a tree of React components

- `Redux`: It simply manages the state and data of your application.

- `Action`: Actions are JavaScript object that contains information. Actions are the only source of information for the store.

- `Reducer`: Reducers are the pure functions that contain the logic and calculation that needed to be performed on the state.

- `Store`: Store is an object which provides the state of the application. This object is accessible with help of the provider in the files of the project.

- useContext is a hook whereas Redux is a state management library.

- useContext is used to share data whereas Redux is used to manage data and state.

- for useContext Changes are made with the Context value whereas for Redux Changes are made with pure functions i.e. reducers.

- for useContext We can change the state in it whereas in Redux The state is read-only. We cannot change them directly.

- For useContext It re-renders all components whenever there is any update in the provider’s value prop whereas for Redux It only re-render the updated components.

- useContext is better to use with small applications whereas Redux is perfect for larger applications.

- useContext is easy to understand and requires less code whereas Redux is quite complex to understand.

# Advantage of using `Redux Toolkit` over `Redux`?

- `Redux Toolkit` offers several advantages over plain `Redux`:

- Reduced Boilerplate: Redux Toolkit's createSlice function automatically generates action types and action creators, reducing the amount of code you need to write.

- Immutability Handling: Redux Toolkit uses the Immer library under the hood, making it easier to write immutable updates to the state.

- DevTools Integration: Redux Toolkit seamlessly integrates with the Redux DevTools Extension, providing a better debugging experience.

# Explain `Dispatcher`.

- In Redux, `dispatch` is a function provided by the store that allows you to send an action to update the state of your application. When you call dispatch, the store runs an action through all of the available reducers, which in turn update the state accordingly.

# Explain `Reducer`.

- In Redux, a `reducer` is a function that takes in the current state of an application and an action as arguments, and returns a new state based on the action.

# Explain `slice`.

- A `slice` is the portion of Redux code that relates to a specific set of data and actions within the store's state. A slice reducer is the reducer responsible for handling actions and updating the data for a given slice. This allows for smaller reducer functions that focus on a slice of state.

# Explain `selector`.

- A `selector` function is any function that accepts the Redux store state (or part of the state) as an argument, and returns data that is based on that state. 

# Explain `createSlice` and the `configuration` it takes.

- A function that accepts an initial state, an object of reducer functions, and a slice name, and automatically generates action creators and action types that correspond to the reducers and state.