# Marko + Webpack

The [marko-loader](https://github.com/marko-js/marko-loader) loader for [Webpack](https://webpack.github.io/) will automatically compile all imported Marko templates during bundling. In addition, `marko-loader` will automatically bundle any template dependencies (including required CSS).

> **ProTip**: Want to see it in action? Check out the [`marko-webpack`](https://github.com/marko-js-samples/marko-webpack) demo repository.

## Installation

```
npm install marko --save
npm install webpack --save
npm install marko-loader --save
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
var myComponent = require('./hello.marko');

myComponent.renderSync({ name:'Marko' }).appendTo(document.body);
```

Now, let's configure `webpack` to compile the `client.js` file and use `marko-loader` for any `*.marko` files:

_webpack.config.js_
```js
module.exports = {
    entry: "./client.js",
    output: {
        path: __dirname,
        filename: "static/bundle.js"
    },
    resolve: {
        extensions: ['.js', '.marko']
    },
    module: {
        loaders: [
            {
                test: /\.marko$/,
                loader: 'marko-loader'
            }
        ]
    }
}
```

Run `webpack` from your terminal and you'll have a new `static/bundle.js` file created.  Reference that from an html file and you're good to go.

_index.html_
```html
<!doctype html>
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
    loaders: [
        //...
        {
            test: /\.less$/, // matches style.less { ... } from our template
            loader: "style-loader!css-loader!less-loader!"
        },
        //...
    ]
//...
```
## Extracting CSS

It is recommended to configure the [`ExtractTextPlugin`](https://www.npmjs.com/package/extract-text-webpack-plugin) so that you get a separate css bundle rather than it being included in the JavaScript bundle.

```
npm install extract-text-webpack-plugin --save
```

_webpack.config.js_
```js
'use strict';
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./client.js",
    output: {
        path: __dirname,
        filename: "static/bundle.js"
    },
    resolve: {
        extensions: ['.js', '.marko']
    },
    module: {
        loaders: [
            {
                test: /\.marko$/,
                loader: 'marko-loader'
            },
            {
                test: /\.(less|css)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!less-loader"
                })
            }
        ]
    },
    plugins: [
        // Write out CSS bundle to its own file:
        new ExtractTextPlugin('static/bundle.css', { allChunks: true })
    ]
};
```
