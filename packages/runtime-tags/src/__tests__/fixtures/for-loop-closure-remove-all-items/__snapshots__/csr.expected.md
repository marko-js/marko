# Render
```html
<div>
  <button>
    Test
  </button>
  <div />
</div>
```

# Mutations
```
INSERT div
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <div>
    hello
  </div>
</div>
```

# Mutations
```
INSERT div/div/#text
INSERT div/#text
REMOVE button before div/#text
```