# Render
```html
<div
  id="ref"
>
  x=0, was=undefined
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
  x=1, was=0
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
  x=2, was=1
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