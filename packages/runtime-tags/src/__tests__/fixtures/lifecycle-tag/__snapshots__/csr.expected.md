# Render
```html
<div
  id="ref"
>
  Mount 0
</div>
<button
  id="increment"
>
  Increment
</button>
```

# Mutations
```
INSERT div, button
INSERT div/#text
```

# Render
```js
container.querySelector("#increment")?.click();
```
```html
<div
  id="ref"
>
  Update 1
</div>
<button
  id="increment"
>
  Increment
</button>
```

# Mutations
```
REMOVE #text in div
INSERT div/#text
```

# Render
```js
container.querySelector("#increment")?.click();
```
```html
<div
  id="ref"
>
  Update 2
</div>
<button
  id="increment"
>
  Increment
</button>
```

# Mutations
```
REMOVE #text in div
INSERT div/#text
```