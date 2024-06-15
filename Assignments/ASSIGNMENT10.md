# How do we configure `tailwind`?

- To Configure the Tailwind CSS with parcel,

- We need to install tailwind library.

- `npm install -D tailwindcss postcss`

- Then we need to setup the config file for tailwind.

- `npx tailwindcss init`

# In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)??

- The `tailwind.config.js` file contains the configurations for the our application. Following are the configurations we require to setup tailwind.

- `content` : This configuration of the file formats, on which the styles are applied.

- `content: ["./src/**/*.{html,js,ts,jsx,tsx}",],`

- This configuration means that in files extensions of `html , js, ts ,tsx, jsx` files will use the stylings of Tailwind.

- `theme` : Theme is where we design our own custom configurations for our project like colors and font-families for our application.

```react
module.exports = {
     theme: {
         screens: {
             sm: '480px',
             md: '768px',
             lg: '976px',
             xl: '1440px',
         },
         colors: {
             'blue': '#1fb6ff',
             'purple': '#7e5bef',
             'pink': '#ff49db',
         },
     }
}
```

- `extend`: Here we can extend more properties for Tailwind like adding values that does not exist for tailwind or overriding the existing the values for tailwind.

```react
extend: {
  spacing: {
    '128': '32rem',
    '144': '36rem',
  },
  borderRadius: {
    '4xl': '2rem',
  }
}
```

- `plugins`: We can use to inject new style in our project using JavaScript instaed of css.

- const plugin = require('tailwindcss/plugin')

```react
module.exports = {
    plugins: [
        plugin(function({ addUtilities, addComponents, e, config }) {
        // Add your custom styles here
        }),
    ]
}
```

# Why do we have `.postcssrc` file?

- `PostCSS` is a Javascript tool that transforms our css code into an abstract syntax tree (AST) and then provides an API for analyzing and modifying it using JS Plugins.

- `PostCSS` provides a large ecosystem of plugins to perform different functionalities like linting, minifying, inserting vendor prefixes, and many other things.

