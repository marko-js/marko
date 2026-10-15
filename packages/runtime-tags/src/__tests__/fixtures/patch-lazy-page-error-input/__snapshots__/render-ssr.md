# Render `{"page":2,"error":{}}`
```html
<h1>
  SHOWN_fetch failed
</h1>
```

# Update `{"page":1}`
```html
<button>
  0
</button>
```
## Change
```
INSERT: button
REMOVE: button + h1
```

# Update `{"page":2,"error":{}}`
```html
<h1>
  SHOWN_again
</h1>
```
## Change
```
INSERT: h1
REMOVE: h1 + button
```
