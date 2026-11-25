# Render `{"value":1}`
```html
<div>
  child 1
</div>
loading...
```
## Console
```
WARN "A lazy load trigger could not find an element matching \"#footer\". The module was loaded immediately."
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
REMOVE: ::text("loading...")
INSERT: #footer
INSERT: #footer::text("late")
```
