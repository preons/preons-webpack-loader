# Preons Webpack Loader

## Usage

Require the yaml inside the js file.

```js
require("./preons.yaml");
```

Add rule to `webpack.config.js`

```js
const path = require("path");

module.exports = {
  //...
  mode: "development",
  entry: path.resolve(__dirname, "fixtures") + "/preons.js",
  module: {
    rules: [
      {
        test: /\.ya?ml$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: path.resolve(__dirname, "lib") + "/loader.js",
            options: {
              /* ... */
            },
          },
          "yaml-loader",
        ],
      },
    ],
  },
};
```
