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
INSERT: button
INSERT: button + link
INSERT: button + .child
INSERT: .child::text("x")
INSERT: #document > html > head > link
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
REMOVE: button + link
REMOVE: button + span
```

# Update
```js
document.querySelector("button").click();
```
