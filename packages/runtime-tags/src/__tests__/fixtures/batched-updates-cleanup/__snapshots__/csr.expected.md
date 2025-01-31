# Render
```html
<button />
<span>
  hi
</span>
<!---->
```

# Mutations
```
INSERT button, span, #comment
```

# Render
```js
container.querySelector("button").click();
```
```html
<button />
<!---->
```

# Mutations
```
INSERT #text
REMOVE span after button
```