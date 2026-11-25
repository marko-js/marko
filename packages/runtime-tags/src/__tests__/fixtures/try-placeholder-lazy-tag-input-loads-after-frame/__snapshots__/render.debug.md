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
INSERT: ::text("loading")
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
REMOVE: ::text("loading")
INSERT: .child
```
