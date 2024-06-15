# What is Microservice?

- Microservice architecture is an architectural style that structures an application as a collection of services that are:

- Independently Deployable

- Loosely coupled

- Organized around business capabilities

- Owned by a small team

- The microservice architecture enables an organization to deliver large, complex applications rapidly, frequently, reliably and sustainably.

# What is Monolith architecture?

- A monolith architecture is a singular, large computing network with one code base that couples all the business concerns together. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying and updated version of the service-side interface.

# What is the difference between Monolith and Microservice?

- Monolith is not easy to scale.

- Monolith can have shared database.

- Large code base makes IDE slow and build time gets increases.

- It is extremely difficult to change the technology or language or framework because everythin is being tightly coupled and depend on each other.

- Microservice Architecture:

- Microservice is built as small independent module based on business functionality.

- It is easy to scale based on demand.

- Each project and module has their own database.

- Easy to change the technology since every module and service is independent.

# Why do we need `useEffect` Hook?

- The `useEffect` Hook is a built in Hook in React that allows functional component to perform side effects and handling lifecycle events in the React component.

- Some examples of side effects are: Fetching the data, directly updating the DOM, and timers.

# What is `Optional Chaining`?

- `Optional chaining` is a powerful feature in React that can make working with deeply nested objects easier. When dealing with large data objects from APIs, it can be challenging to access object properties without explicit checks for null or undefined values. Optional chaining allows us to safely access their properties without the risk of errors.

- With Optional Chaining, we can write safe, efficient, and maintainable code. To use Optional Chaining, add question mark (?) before each property.

# What is `Shimmer UI`?

- `Shimmer UI` resembles the page's actual UI. So users will understand how quickly the web or mobile app will load even before the content has shown up. It is kind of we load fake page until we get the actual data from the APIs.

# What is `Conditional Rendering`, explain with a code example?

- `Conditional Rendering` is a concept often used in web development to conditionally display or render certain content or components based on some specific conditions. It allows us to control what needs to be displayed on a web page based on variables, user interactions or other dynamic factors.

! [Example](code_example.PNG)

- In this example, we have one state variable logged in that determines what will be displayed in the UI.

# What is `CORS`?

- `CORS` stands for Cross-Origin Resource Sharing, is a security feature implemented by web browsers to control the requests made by web pages from one domain to another domain. It is critical component of web security and helps to protect web users from potential security vulnerabilities.

# What is `Async` and `Await`?

- `Async` and `Await` are features in modern programming languages, primarily used in asynchronous programming to simplify working with asynchronous code and promises.

- `Async` is used to declare a function as asynchronous, which means it will always return a promise.

- `Await` is used within a async function to pause the execution of the function until a promise is resolved, allowing us to work with the result of that promise as if it were a synchronous operation.

# What is the use of `const json = await data.json();` in getRestaurants?

- `const json = await data.json()` is used to parse the response from an HTTP request (API call) into JavaScript object.

- data is the result of HTTP request using JavaScript. It represents the response from the server.

- The json() method is called on the response object (data) to parse the response body as JSON.

- The await keyword is used to pause the execution of the function until the promise returned by data.json() is resolved.
