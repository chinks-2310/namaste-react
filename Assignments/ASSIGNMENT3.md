# What is `JSX`?

- JSX stands for Javascript XML.

- JSX allows us to write HTML in React.

- JSX makes it easier to write and add HTML in React.

- JSX is not HTML in JS. It's HTML like syntax.

# Superpowers of `JSX`?

- Using JSX, we can write markup inside Javascript, providing us with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.

# Role of `type` attribute in script tag? What options can I use there?

- The `type` attribute specifies the type of the script. The type attributes identifies the content between the `<script>` and `</script>` tags. It has a default value which is `text/javascript`.

- `type` attribute can be of the following types:

- `text/javascript`: It is the basic standard of writing javascript code inside the `<script>` tag.

- `text/ecmascript`: This value indicates that the script is following `EcmaScript` standards.

- `module`: This value tells the browser that the script is module that can import or export other files or modules inside it.

- `text/typescript`: As the name suggest the script is written in `TypeScript`.

# `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` is JSX?

- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable or a React Element. The `{}` can be embeded a Javascript expression or a variable inside it.

- `<TitleComponent />`: This value represents a Component that is returning some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value. A component is written inside `{< />}` expression.

- `<TitleComponent></TitleComponent>`: `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `<TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
