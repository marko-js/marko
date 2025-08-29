# Render
```html
<div>
  3
</div>
<div>
  4
</div>
<button>
  before
</button>
```

# Mutations
```
INSERT div0, div1, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  3
</div>
<div>
  4
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