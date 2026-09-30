# Render
```html
<button
  id="toggle"
>
  toggle
</button>
```

# Update `click("#toggle")`

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
