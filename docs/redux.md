# Redux + Marko

See the [marko-redux](https://github.com/marko-js-samples/marko-redux) sample
project for a fully-working example.

## Installation

```bash
npm install redux --save
npm install marko --save
```

## Usage

The partial code snippet below shows how a Marko UI component can be connected
to a Redux store using the `store.subscribe()` method and the Marko `forceUpdate()`
method:

**counter.marko**

```javascript
import store from './store';

class {
    onMount () {
        store.subscribe(() => {
            // Force this UI component to rerender:
            this.forceUpdate();

            // The UI component will be rerendered using the new
            // state returned by `store.getState()`
            //
            // The following is another option to force an update:
            // this.input = store.getState();
        });
    }
}

<div>
    <counter(store.getState()) ... />
</div>
```

**reducer.js**

```js
module.exports = function(state, action) {
  state = state || {
    value: 0
  };

  // Additional reducer logic here...

  return state;
};
```

In `counter.marko`, the imported store module exports a Redux store created
using the following code:

**store.js**

```javascript
var redux = require("redux");
var counter = require("./reducer");

module.exports = redux.createStore(counter);
```
