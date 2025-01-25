# Render
```html
<div>
  <div>
    <button>
      0
    </button>
  </div>
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
<div />
```

# Mutations
```
INSERT div/#text
REMOVE div after div/#text
```