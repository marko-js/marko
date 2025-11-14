# Render
```html
<div
  id="ref"
/>
<button
  id="increment"
>
  Increment
</button>
```

# Mutations
```
INSERT div, button
```

# Render
```js
container.querySelector("#increment")?.click();
```
```html
<div
  id="ref"
>
  {"x":1,"w":1,"y":0,"u":5}
</div>
<button
  id="increment"
>
  Increment
</button>
```

# Mutations
```
INSERT div/#text
```