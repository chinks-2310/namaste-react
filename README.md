# Namaste React 🚀

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification of our file
- Bundling - Takes all our file and make into one file
- Compressed our files
- Consitent Hashing
- Code Splitting
- Differential Bundling - Support Older Browser
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - Remove Unused code for you
- Different dev and prod bundles

# Two types of Export/Import

- Default Export/Import

- export default component

- import component from Path

- export const component

- import {component} from path

# React Hooks

- Normal JS Utility function written by Facebook Developers

- useState() - Super powerful state variables in React

- useEffect()

# 2 types of Routing in web apps

- Client Side Routing: We are not making any network or server call because all the components are already loaded to our App.

- Server Side Routing: You make a network call, and the page that about.html is coming from server.

# Redux Toolkit

    - Install @reduxjs/toolkit and react-redux.
    - Build our store.
    - Connect our store to our app.
    - Create Slice (cart).
    - Dispatch an action.
    - Selector.

# Types of testing (developer)

    - Unit testing:  Test small unit of your application
    - Integration testing: Testing the integration of the components
    - End to End testing - e2e testing - Test all the flows - User landing to the page till he leaves the page. - User flow
    - JEST - React testing library uses Jest.

# Setting up testing in our App:

- Installed React testing library.

- Installed jest.

- Installed Babel dependencies.

- Configured Babel.

- Configured parcel file to disable defaule babel transpilation.

- Jest Configuration - npx jest --init

- Install jsdom library

- Install @babel/preset-react - to make JSX work in test cases.

- Include @babel/preset-react inside my babel config

- Install @testing-library/jest-dom

- JSDOM is a library which parses and interacts with assembled HTML just like a browser. The benefit is that it isn't actually a browser. Instead, it implements web standards like browsers do.

- __ = dunder

- 'jest --watch' - similar to HMR it will automatically rerun the test

- act