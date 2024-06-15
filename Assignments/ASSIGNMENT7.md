# What are the various ways to add images into our App? Explain with code examples.

- In React, we can use the `<img>` tag for static images or the import statement for dynamic images. Additionally, we can use popular libraries like react-images or react-bootstrap for more advanced features. Here are examples for both static and dynamic images:

- Static Images:

```react
import React from 'react';
const App = () =>
{
    return (
        <div>
            <h1>Your React App</h1>
            <img src="/path/to/your/image.jpg" alt="Description of the image" />
        </div>
    );
};
export default App;
```

- Dynamic Images:

```react

For dynamic images, you can use the `import` statement. This assumes that your build system supports ES6 `module` syntax.

import React from 'react';
import dynamicImage from './path/to/your/image.jpg'; // Import the image

const App = () => {
    return (
        <div>
            <h1>Your React App</h1>
            <img src={dynamicImage} alt="Description of the image" />
        </div>
    );
};

export default App;
```

- Using a Library (e.g., react-bootstrap): If we are using a UI library like react-bootstrap, we can leverage their components for more stylized approach:

```react
import React from 'react';
import { Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const imageUrl = '/path/to/your/image.jpg';

    return (
        <Container>
            <h1>Your React App</h1>
            <Image src={imageUrl} alt="Description of the image" fluid />
        </Container>
    );
};

export default App;
```

- Using the full URL of the image for the web(cdn) or any public images.

- Adding the image into the project drag the image into the project and import it into desired component.

- The correct way to structure images in our project is to add them in an images folder, or create constants or config folder and add them or create an asset folder.

# What would happen if we do `console.log(useState())`?

- if we use `console.log(useState())`, it will log an array with two elements to the console. The `useState` function returns an array where the first element is current value and second element is a function that allows us to update the state.

```react

import React, { useState } from 'react';

const ExampleComponent = () => {
 console.log(useState());

 // The rest of your component logic...
};
```

- In the browser when we logged into the console we get an array `[undefied, function]`. The first item in an element state is undefined and the second item in an array is setState function is `bound dispatchSetState`.

# How will `useEffect` behave if we don't add dependency array?

- syntax of useEffect:

- `useEffect(() => {}, [])`

1. When the dependency array is not included in the arguments of `useEffect(() => {})`, the callback function will be executed everytime the component is rendered and re-rendered.

2. When the dependency array is an empty in the arguments of `useState(() => {}, [])` hook, the call back function will be executed only one time during initial render of the component.

3. When the dependency array contains a argument `useState(() => {}, [argument])` hook, the call back function will be executed one time during the initial render of the component and also re-render if there is any change in dependency argument.

# What is `SPA`?

- `SPA` stands for `Single Page Application`. Its a web application that dynamically updates the webpage with data from server without reloading/refreshing the entire page.

# What is the difference between `Client Side Routing` and `Server Side Routing`?

- In `Server Side Routing` or rendering every change in URL, http request is made to server to fetch the webpage and replace the current webpage with the older one.

- In `Client Side Routing` or rendering during the first load, the webapp is loaded from the server to client, which whenever there is a change in URL, the router library nevigates the user to newpage without sending any requests to backend. All `SPA` uses `Client Side Routing`.
