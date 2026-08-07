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
document.querySelector("#toggle").click();
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
  simulated chunk load failure: ./v:child.marko.input_value.mjs
</div>
```
## Change
```
INSERT: #toggle + #error
UPDATE: #error::text " " => "simulated chunk load failure: ./v:child.marko.input_value.mjs"
```
