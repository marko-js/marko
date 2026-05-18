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

# Update
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
## Change
```
INSERT: div > div:nth-of-type(1) + div
```

# Update
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
## Change
```
REMOVE: div > div + div
```

# Update
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
## Change
```
REMOVE: div > div
```

# Update
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
## Change
```
INSERT: div > div
```
