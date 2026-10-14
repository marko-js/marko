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
REMOVE: h1
INSERT: button
UPDATE: button::text " " => "0"
```

# Update `{"page":2,"error":{}}`
```html
<h1>
  SHOWN_again
</h1>
```
## Change
```
REMOVE: button
INSERT: h1
```
