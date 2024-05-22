# What is `prop drilling`?

- `Prop Drilling` refers to the process of passing down props through multiple layers of components, even when some of the components do not directly use the props.

- Each intermediary component in the hierarchy has to pass the prop down, even if if doesn't use the prop itself.

- Instead of directly passing the data to each child component, you pass it through each intermediary component in the hierarchy until it reaches the desired child component. This passing of props through multiple levels of components is what prop drilling entails.

# What is lifting the state up?

- Lifting state up is a common pattern that react developers use to share state between multiple components. This process involves moving the state management from child components to a common ancestor (parent component). This way, the state becomes the "source of truth" for child components, and they can access and update it through props.

# What is `Context Provider` and `Context Consumer`?

- The `Context Provider` is responsible for creating and managing the context, which holds the data to be shared between components. On the other hand, the `Context Consumer` is used to access the context and its data from within a component.

# If you don’t pass a value to the provider does it take the default value?

- If we do not override the values of context it takes the default values form the context , when we initialise the context.