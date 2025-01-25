# Render
```html
<div>
  <button
    id="button"
  >
    0
  </button>
</div>
```

# Mutations
```
INSERT div
REMOVE #text in div/button
INSERT div/button/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <button
    id="button"
  >
    1
  </button>
</div>
```

# Mutations
```
REMOVE #text in div/button
INSERT div/button/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <button
    id="button"
  >
    2
  </button>
</div>
```

# Mutations
```
REMOVE #text in div/button
INSERT div/button/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <button
    id="button"
  >
    3
  </button>
</div>
```

# Mutations
```
REMOVE #text in div/button
INSERT div/button/#text
```