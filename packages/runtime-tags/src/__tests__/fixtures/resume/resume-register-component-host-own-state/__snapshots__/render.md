# Render `{"card":true}`
```html
<button
  id="toggle"
>
  toggle
</button>
```

# Update `click("#toggle")`
```html
<button
  id="toggle"
>
  toggle
</button>
component host: registered
```
## Change
```
INSERT: #toggle + ::text("component host: registered")
```

# Update `click("#toggle")`
```html
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
REMOVE: #toggle + ::text("component host: registered")
```
