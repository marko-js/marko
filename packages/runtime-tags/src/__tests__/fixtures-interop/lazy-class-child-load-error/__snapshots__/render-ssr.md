# Render
```html
<button
  id="toggle"
>
  toggle
</button>
```

# Update
```js
container.querySelector("#toggle").click();
```

# Update
```html
<button
  id="toggle"
>
  toggle
</button>
<div
  id="error"
>
  load failed
</div>
```
## Change
```
INSERT: #toggle + #error
INSERT: #error::text("load failed")
```
