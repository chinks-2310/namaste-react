# Is `JSX` mandatory for React?

- No `JSX` is not mandatory for React, we can create React using React.createElement but to avoid complexity for large scale applications we use .

# Is `ES6` mandatory for React?

- No `ES6` is not mandatory for React. React components can also be written using create-react-class module but because it becomes too complex and for performance optimizations, code readability in large scale applications, So it is preferred to use ES6.

# How can I write comment in `JSX`?

- `{/ comments /}`.

# What is `<React.Fragment></React.Fragment>` and `{<></>}`?

- Both are same. When we don't want to add another container or wrapper in the DOM we use fragments. They are used to group elemenets together without affecting DOM. This is useful when we have to render multiple child components in a single parent component.

# What is `Virtual DOM`?

- It is a copy of original DOM. And original `DOM` is just object representation of HTML elemenets(UI) groupped together. Every time the state of our application changes, the virtual DOM gets updated instead of the real DOM.

# What is `Reconciliation` in React?

- Reconciliation is a process where react compares the state of previous virtual DOM with the new virtual DOM and then it updates only the part in original DOM where the state has been changed. React becomes faster because of `Reconciliation`.

# What is `React Fiber`?

- Fiber Reconcilier is the new reconciliation algorithm in React.

# Why do we need keys in `React`?

- `Keys` are used when we render a list. Suppose we have a list of cards without keys and we have changed the state of few cards. Changing the background color, it will reorder those cards. Since cards does not have keys, React will treat them same and after reordering it will change the state of other cards.

# Can we use index as `keys`?

- Yes we can use but it is bad practise. React recommends that we do not use index as key since it could impact performance negatively and could lead to some unstable component behavior.

# What are `props` in React?

- `Props` are properties that a functional component accepts. They are being passed from parent to child components.

# What is `Config Driven UI`?

- Controlling UI based on data given by backend is known as `Config Driven UI`.
