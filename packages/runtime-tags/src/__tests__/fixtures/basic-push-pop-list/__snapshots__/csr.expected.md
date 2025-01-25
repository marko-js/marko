# Render
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
INSERT div
```

# Render
```js
container.querySelector("#add").click();
```
```html
<div>
  1
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
REMOVE #text before div/#text
```

# Render
```js
container.querySelector("#add").click();
```
```html
<div>
  12
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
INSERT div/#text1
```

# Render
```js
container.querySelector("#remove").click();
```
```html
<div>
  1
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
REMOVE #text after div/#text
```

# Render
```js
container.querySelector("#add").click();
```
```html
<div>
  13
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
INSERT div/#text1
```