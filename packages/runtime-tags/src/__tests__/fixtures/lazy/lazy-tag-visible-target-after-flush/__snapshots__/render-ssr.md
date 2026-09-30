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
INSERT: #footer::text("late")
REMOVE: ::text("loading...")
INSERT: div + #footer
```
