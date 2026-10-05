# Render
```html
<button />
```

# Update
```js
document.querySelector("button").click();
```

# Update
```html
<button />
loading
```
## Change
```
INSERT: button + ::text("loading")
```

# Update
```html
<button />
<span
  class="child"
>
  b
</span>
```
## Change
```
INSERT: button + .child
REMOVE: .child + ::text("loading")
```
