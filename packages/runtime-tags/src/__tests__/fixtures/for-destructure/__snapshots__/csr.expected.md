# Render
```html
<div>
  <div>
    Marko: HTML Reimagined
  </div>
  <button
    id="add"
  >
    Add
  </button>
  <button
    id="remove"
  >
    Remove
  </button>
</div>
```

# Mutations
```
INSERT div
```

# Render
```js
container.querySelector("#add").click();
```
```html
<div>
  <div>
    Marko: HTML Reimagined
  </div>
  <div>
    JavaScript: Java, but scriptier
  </div>
  <button
    id="add"
  >
    Add
  </button>
  <button
    id="remove"
  >
    Remove
  </button>
</div>
```

# Mutations
```
INSERT div/div1
```

# Render
```js
container.querySelector("#remove").click();
```
```html
<div>
  <div>
    Marko: HTML Reimagined
  </div>
  <button
    id="add"
  >
    Add
  </button>
  <button
    id="remove"
  >
    Remove
  </button>
</div>
```

# Mutations
```
REMOVE div after div/div
```

# Render
```js
container.querySelector("#remove").click();
```
```html
<div>
  <button
    id="add"
  >
    Add
  </button>
  <button
    id="remove"
  >
    Remove
  </button>
</div>
```

# Mutations
```
INSERT div/#text
REMOVE div before div/#text
```

# Render
```js
container.querySelector("#add").click();
```
```html
<div>
  <div>
    JavaScript: Java, but scriptier
  </div>
  <button
    id="add"
  >
    Add
  </button>
  <button
    id="remove"
  >
    Remove
  </button>
</div>
```

# Mutations
```
REMOVE #text before div/button0
INSERT div/div
```