# How do you create Nested Routes react-router-dom configuration.

- We can create a `Nested Routing` inside a react router configuration as below: First we call `createBrowserRouter` for routing different pages.

```react
const router = createBrowserRouter([
    {
        path: "/", // Show path for routing
        element: <Parent /> // Show component for particular path
        errorElement: <Error /> // Show error component for path is different
        children: [ // Show children component for routing
            {
                path:"/path",
                element: <Child />
            }
        ]
    }
])
```

- Now we can create a nested routing for /path using children again as follows:

```react
const router = createBrowserRouter([
    {
        path: "/", // Show path for routing
        element: <Parent /> // Show component for particular path
        errorElement: <Error /> // Show error component for path is different
        children: [ // Show children component for routing
            {
                path:"/path",
                element: <Child />,
                children: [ // nested routing for subchild
                    {
                        path: "child",  // Don't use '/' because then react-router-dom will understand if it's the direct path
                        element: <SubChild />,
                    }
                ]
            }
        ]
    }
])
```

# Read about `createHashRouter`, `createMemoryRouter` from React Router docs?

- `createHashRouter` is useful if we are unable to configure our web server to direct all traffic to our React Router Application. Instead of using normal URLs, it will use `hash (#)` portion of the URL to manage the `application URL`.

- `createMemoryRouter` Instead of using the browsers history a memory router manages it's own history stack in memory.

# What is the order of life cycle method calls in Class Based Components?

- Following is the order of life cylce methods calls in `Class Based Components`:

- Constructor()

- render()

- componentDidMount()

- componentDidUpdate()

- componentWillUnmount()

# Why do we use `componentDidMount`?

- The `componentDidMount` method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered. We can run any piece of react code to modify the components. For ex. It's the best place to `make API calls`

# Why do we use `componentWillUnmount`? Show with example.

- `componentWillUnmount()` is useful for the cleanup of the application when we switch routes from one place to another. Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. If we revisit the same page, a new process starts that affects the browser performance. For example, in Repo class, during `componentDidMount()` a timer is set with an interval of every one second to print in console. When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and causing huge performance issue. To avoid such situations the cleanup function can be done in componentWillUnmount, in this example `clearInterval` (timer) to clear the timer interval before unmounting Repo component.

- In `Client Side Routing` or rendering during the first load, the webapp is loaded from the server to client, which whenever there is a change in URL, the router library nevigates the user to newpage without sending any requests to backend. All `SPA` uses `Client Side Routing`.

# (Research) Why do we use `super(props)` in constructor?

- `super(props)` is used to inherit the properties and access of variables of the React parent class when we initialize our component. super() is used inside constructor of a class to derive the parent's all properties inside the class that extended it. If super() is not used, then Reference Error : Must call super constructor in derived classes before accessing 'this' or returning from derived constructor is thrown in the console. The main difference between super() and super(props) is the this.props is undefined in child's constructor in super() but this.props contains the passed props if super(props) is used.

# (Research) Why can't we have the callback function of useEffect async?

- `useEffect` expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as async, it will return a promise and the promise will affect the clean-up function from being called.
