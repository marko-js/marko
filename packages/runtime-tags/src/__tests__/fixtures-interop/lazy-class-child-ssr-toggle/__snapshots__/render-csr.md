# Render `{"show":true}`
```html
<button
  id="toggle"
>
  toggle
</button>
```

# Update `click("#toggle")`

# Update `click("#toggle")`
```html
<button
  id="toggle"
>
  toggle
</button>
<span
  id="child"
>
  42
</span>
```
## Change
```
INSERT: #toggle + #child
INSERT: #child::text("42")
```
