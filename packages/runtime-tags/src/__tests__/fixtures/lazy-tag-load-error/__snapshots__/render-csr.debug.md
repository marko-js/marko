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
  Export '$input_value' is not defined in module
</div>
```
## Change
```
INSERT: #toggle + #error
UPDATE: #error::text " " => "Export '$input_value' is not defined in module"
```
