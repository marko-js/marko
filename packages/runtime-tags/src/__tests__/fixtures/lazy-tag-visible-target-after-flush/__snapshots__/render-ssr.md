# Render `{"value":1}`
```html
<div>
  child 1
</div>
loading...
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
