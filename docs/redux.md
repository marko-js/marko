# Redux + Marko

See the [`marko-redux` sample project](https://github.com/marko-js-samples/marko-redux) for a fully-working example.

## Installation

First, save the [`marko`](https://www.npmjs.com/package/marko) and [`redux`](https://www.npmjs.com/package/redux) packages to your project’s dependencies:

```bash
npm i marko redux
```

## Usage

The partial code below shows how a Marko UI component can connect to a Redux store, using Redux’s `store.subscribe()` method and Marko’s `forceUpdate()` method:

### `counter.marko`

```marko
import store from './store';

class {
  onMount () {
    store.subscribe(() => {
      // Force this UI component to rerender
      this.forceUpdate();

      // The UI component will rerender with the new
      // state returned by `store.getState()`
      //
      // You could also force an update like this:
      // this.input = store.getState();
    });
  }
}

<counter(store.getState()) />
```

### `reducer.js`

```js
module.exports = function(state, action) {
  state = state || { value: 0 };

  // Additional reducer logic here…

  return state;
};
```

### `store.js`

In `counter.marko`, the imported store module exports a Redux store created with the following code:

```js
const redux = require("redux");
const counter = require("./reducer");

module.exports = redux.createStore(counter);
```
