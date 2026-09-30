# Render `{"value":1}`
## Console
```
WARN "A lazy load trigger could not find an element matching \"#footer\". The module was loaded immediately."
```

# Update
```html
<div>
  child 1
</div>
```
## Change
```
INSERT: div
```

# Update
```html
<div>
  child 1
</div>
loading...
```
## Change
```
INSERT: div + ::text("loading...")
```

# Update
```html
<div>
  child 1
</div>
<footer
  id="footer"
>
  late
</footer>
```
## Change
```
INSERT: div + #footer
REMOVE: #footer + ::text("loading...")
```
