# Render
```html
<div
  id="el"
/>
<div>
  <button>
    Click
  </button>
</div>
```

# Mutations
```
INSERT div0, div1
```

# Render
```js
container.querySelector("button").click();
```
```html
<div
  id="el"
>
  0
</div>
<div>
  <button>
    Click
  </button>
</div>
```

# Mutations
```
INSERT div0/#text
```