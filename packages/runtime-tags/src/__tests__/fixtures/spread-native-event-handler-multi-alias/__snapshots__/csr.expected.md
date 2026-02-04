# Render
```html
<div
  id="el"
/>
<button>
  Click Me
</button>
<!---->
```

# Mutations
```
INSERT div, button, #text, #comment
```

# Render
```js
container.querySelector("button").click();
```
```html
<div
  id="el"
>
  [onClick(child)][onClick(parent)]
</div>
<button>
  Click Me
</button>
<!---->
```

# Mutations
```
INSERT #text
REMOVE #text in div
INSERT div/#text
```