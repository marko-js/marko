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

# Update `click("#add")`
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

# Update `click("#remove")`
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

# Update `click("#remove")`
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

# Update `click("#add")`
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
