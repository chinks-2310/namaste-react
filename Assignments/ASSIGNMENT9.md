# When and why do we need `lazy()`?

- `lazy()` function in react load react component lazily through code splitting without help from any additional libraries.

- Lazy loading helps to optimize the performance of React applications. The data is only rendered when visited or scrolled. 

- Lazy loading helps to load the web page quickly and presents the limited content to the user that is needed for the interaction lazy loading can be more helpful in applications that have high-resolution images or data that alters the loading time of application.

# What is `suspense`?

- `Suspense` is component which temporarily render a fallback UI while its children are still loading. 

- It is used to split large application into chunks and lazy load them to reduce the initial load time and bundle size.

# Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?

- The error is thrown as Exception by React when the promise to `dynamically import the lazy component` is not resolved and the component is expected to render in meantime. 

- React expects a Suspense boundary to be in place for showing a fallback prop until the promise is getting resolved. If showing `the shimmer or loading indicator` is not desirable in some situations, then `startTransistion API` can used to show the old UI while new UI is being prepared. React do this without having to delete or remove the `Suspense component` or its props from your code.

# Advantages and disadvantages of using this `code splitting pattern`?

- `Code splitting` is a technique that splits an application's `JS bundles into smaller chunks`, which are loaded dynamically as needed. This allows an application to load only the code it needs at a given time, and load other bundles on demand.

- It can have many advantages such as 

- `Faster initial load time`: By only loading the necessary code for the initial view, code splitting can significantly improve the time it takes for the page to load. This can be especially helpful on slower network connections or devices.

- `Improved user experience`: Code splitting can allow users to interact with the application sooner, and non-essential code can be loaded asynchronously in the background to improve the overall responsiveness of the application.

- `Improved performance`: Code splitting can reduce the amount of JavaScript that needs to be parsed and executed.

- However, `Code Splitting` can also have few draw backs, including:

- Increased complexity in development and testing processes

- More network requests that can affect performance

- Additional code and dependencies that can increase the bundle size

# When do we and why do we need `Suspense`?

- `Suspense` is a React feature that allows developers to display a temporary UI while waiting for data to load. It's best used when you want to display a fallback while waiting for something to load, such as when waiting for data to be fetched from an API after the initial page load.

- Suspense is often used in conjunction with `React's dynamic import mechanism called lazy().` Lazy loading refers to the requirement that a component or portion of code will load only when it's needed. This functionality helps to minimize your application's loading speed and lower the initial bundle size.
