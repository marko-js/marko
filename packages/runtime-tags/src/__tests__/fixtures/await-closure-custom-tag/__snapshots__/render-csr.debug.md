# Render `{"data":{"q":"a"}}`
```html
<button>
  toggle
</button>
```

# Update
```html
<button>
  toggle
</button>
loading...
```
## Change
```
INSERT: button + ::text("loading...")
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
INSERT: button + div
REMOVE: div + ::text("loading...")
UPDATE: div::text@0 "" => "a"
```
