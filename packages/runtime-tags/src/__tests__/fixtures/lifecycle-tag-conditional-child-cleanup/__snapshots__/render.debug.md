# Render
```html
<div
  id="ref"
>
  Mounted
</div>
<button
  id="toggle"
>
  Toggle
</button>
<p>
  child
</p>
```

# Update
```js
container.querySelector("#toggle").click();
```
```html
<div
  id="ref"
>
  Destroyed
</div>
<button
  id="toggle"
>
  Toggle
</button>
```
## Change
```
REMOVE: #toggle + p
REMOVE: #ref::text("Mounted")
INSERT: #ref::text("Destroyed")
```
