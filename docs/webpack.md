# Marko + Webpack

The [@marko/webpack/loader](https://github.com/marko-js/webpack##loader-markowebpackloader) loader for [Webpack](https://webpack.github.io/) will automatically compile all imported Marko templates during bundling. In addition, it will automatically bundle any template dependencies (including required CSS).

> **ProTip**: Want to see it in action? Check out the [`marko-webpack`](https://github.com/marko-js-samples/marko-webpack) demo repository.

## Installation

```
npm install marko
npm install webpack @marko/webpack --save-dev
```

## Client rendering

Let's say we have a simple view that we want to render in the browser: `hello.marko`

_hello.marko_

```marko
<h1>Hello ${input.name}</h1>
```

First, let's create a `client.js` that requires the view and renders it to the body:

_client.js_

```js
import MyTemplate from "./hello.marko";

MyTemplate.renderSync({ name: "Marko" }).appendTo(document.body);
```

Now, let's configure `webpack` to compile the `client.js` file and use `@marko/webpack/loader` for any `*.marko` files:

_webpack.config.js_

```js
module.exports = {
  entry: "./client.js",
  output: {
    path: __dirname,
    filename: "static/bundle.js"
  },
  resolve: {
    extensions: [".js", ".marko"]
  },
  module: {
    rules: [
      {
        test: /\.marko$/,
        loader: "@marko/webpack/loader"
      }
    ]
  }
};
```

Run `webpack` from your terminal and you'll have a new `static/bundle.js` file created. Reference that from an html file and you're good to go.

_index.html_

```html
<!DOCTYPE html>
<html>
  <body>
    <script src="static/bundle.js"></script>
  </body>
</html>
```

Load up that page in your browser and you should see `Hello Marko` staring back at you.

## Using CSS pre-processors

If you're using inline css with pre-processors, you must configure the appropriate loader.

_pretty.marko_

```marko
style.less {
    .pretty {
        color:@pretty-color;
    }
}

<div.pretty/>
```

_webpack.config.js_

```js
//...
module: {
  rules: [
    //...
    {
      test: /\.less$/, // matches style.less { ... } from our template
      use: ["style-loader", "css-loader", "less-loader"]
    }
    //...
  ];
}
//...
```

## Extracting CSS

It is recommended to configure the [`MiniCSSExtractPlugin`](https://webpack.js.org/plugins/mini-css-extract-plugin) so that you get a separate css bundle rather than it being included in the JavaScript bundle.

```
npm install mini-css-extract-plugin --save-dev
```

_webpack.config.js_

```js
const CSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./client.js",
  resolve: {
    extensions: [".js", ".marko"]
  },
  module: {
    rules: [
      {
        test: /\.marko$/,
        loader: "@marko/webpack/loader"
      },
      {
        test: /\.(less|css)$/,
        use: [CSSExtractPlugin.loader, "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    // Write out CSS bundle to its own file:
    new CSSExtractPlugin({
      filename: "[name].css"
    })
  ]
};
```
