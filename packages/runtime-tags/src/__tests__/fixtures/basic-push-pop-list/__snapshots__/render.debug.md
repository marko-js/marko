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

# Update
```js
document.querySelector("#add").click();
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
## Change
```
INSERT: div::text("1")
```

# Update
```js
document.querySelector("#add").click();
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
## Change
```
INSERT: div::text@0 + ::text("2")
```

# Update
```js
document.querySelector("#remove").click();
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
## Change
```
REMOVE: div::text + ::text("2")
```

# Update
```js
document.querySelector("#add").click();
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
## Change
```
INSERT: div::text@0 + ::text("3")
```
