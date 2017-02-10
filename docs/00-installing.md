# Installation

## Trying out Marko

> **Coming Soon**

If you just want to play around with Marko in the browser, head on over to our [Try Online](/try-online) feature.  You'll be able to develop a Marko application right in your browser.

## Creating new apps

> **Coming Soon**

If you're starting from scratch, [`marko-devtools`]() provides a starter app to get you going quickly.  To get started:
```
npm install marko-devtools --global
marko create-app hello-world
cd hello-world
npm start
```

## Direct usage

### Installing

The Marko compiler runs on [Node.js](https://nodejs.org/) and can be installed using [npm](https://www.npmjs.com/package/marko/tutorial):

```
npm install marko --save
```

or using [yarn](https://yarnpkg.com):

```
yarn add marko
```

### In the browser

Let's say we have a simple view that we want to render in the browser: `hello.marko`

_hello.marko_
```xml
<h1>Hello ${input.name}</h1>
```

First, let's create a `client.js` that requires the view and renders it to the body:

_client.js_
```js
var myComponent = require('my-component');

myComponent.renderSync({ name:'Marko' }).appendTo(document.body);
```

Now, we need to bundle these files for use in the browser.  We can use a tool called [`lasso`](https://github.com/lasso-js/lasso) to do that for us, so let's get it (and the marko plugin) installed:

```
npm install --global lasso-cli
npm install --save lasso-marko
```

Now we can build our bundle for the browser:

```
lasso --main client.js --plugins "lasso-marko"
```

This builds a `client.js` file to the newly created `static/` directory.  If we had css in the view, a `client.css` file would also have been generated.  You can now create an html file and drop the script (and stylesheet) in it:

_index.html_
```html
<!doctype html>
<html>
<body>
    <script src="static/client.js"/>
</body>
</html>
```

Load up that page in your browser and you should see `Hello Marko` staring back at you.

### On the server

#### Require Marko views

Marko provides a [custom Node.js require extension]() that allows you `require` Marko views exactly like a standard JavaScript module. Take the following example `server.js`:

_server.js_
```js
// The following line installs the Node.js require extension
// for `.marko` files.  This should be called once near the start
// of your application before requiring any `*.marko` files.
require('marko/node-require');

// Load a Marko view by requiring a .marko file:
var hello = require('./hello.marko');
```

#### Serving a simple page

Let's update `server.js` to serve the view from an http server:

_server.js_
```js
// Allow requiring marko views
require('marko/node-require');

var http = require('http');
var hello = require('./hello.marko');
var port = 8080;

http.createServer((req, res) => {
    /* let the browser know html is coming */
    res.setHeader('content-type', 'text/html');

    /* render the output to the `res` output stream */
    hello.render({ name:'Marko' }, res);
}).listen(port);
```

And give `hello.marko` some content:

_hello.marko_
```xml
<h1>Hello ${input.name}</h1>
```

Start the server (`node server.js`) and open your browser to [http://localhost:8080](http://localhost:8080) where you should see the heading `Hello Marko`.