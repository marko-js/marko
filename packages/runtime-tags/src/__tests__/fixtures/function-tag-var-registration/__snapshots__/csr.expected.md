# Render
```html
<div>
  3
</div>
<button>
  before
</button>
```

# Mutations
```
INSERT div, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  3
</div>
<button>
  after
</button>
```

# Mutations
```
REMOVE #text in button
INSERT button/#text
```