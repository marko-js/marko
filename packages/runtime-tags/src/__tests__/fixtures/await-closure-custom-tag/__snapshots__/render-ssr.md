# Render `{"data":{"q":"a"}}`
```html
<button>
  toggle
</button>
loading...
```

# Update
```html
<button>
  toggle
</button>
<div>
  a 
</div>
```
## Change
```
INSERT: div::text("a ")
REMOVE: ::text("loading...")
INSERT: button + div
```
