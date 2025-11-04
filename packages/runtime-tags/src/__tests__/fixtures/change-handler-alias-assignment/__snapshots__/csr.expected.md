# Render
```html
<button>
  Before
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
  After
</button>
```

# Mutations
```
REMOVE #text in button
INSERT button/#text
```