# Render

# Update
```html
<button />
<span
  class="child"
>
  x
</span>
```
## Change
```
INSERT: #document > html > head > link
INSERT: button
INSERT: link
INSERT: .child
INSERT: .child::text("x")
```

# Update
```js
document.querySelector("button").click();
```
```html
<button />
```
## Change
```
REMOVE: link
REMOVE: span
```

# Update
```js
document.querySelector("button").click();
```
