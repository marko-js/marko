# Render `{"show":true}`

```html
<button>
  <span
    id="count"
  >
    0
  </span>
</button>
```

# Mutations
```
INSERT button
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  <span
    id="count"
  >
    1
  </span>
</button>
```

# Mutations
```
REMOVE #text in button/span
INSERT button/span/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  <span
    id="count"
  >
    2
  </span>
</button>
```

# Mutations
```
REMOVE #text in button/span
INSERT button/span/#text
```