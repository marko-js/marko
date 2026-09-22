# Render
```html
<div
  id="out"
>
  a
</div>
<button />
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  id="out"
>
  b
</div>
<button />
```
## Change
```
REMOVE: #out::text("a")
INSERT: #out::text("b")
```
