# Render
```html
<button>
  before
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
  after
</button>
```

# Mutations
```
REMOVE #text in button
INSERT button/#text
```