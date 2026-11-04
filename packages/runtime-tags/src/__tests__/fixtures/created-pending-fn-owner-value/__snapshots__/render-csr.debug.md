# Render `{"label":"a","promise":{}}`

# Update `{"label":"b","promise":{"value":"q"}}`

# Update
```html
<button>
  f:b
</button>
```
## Change
```
INSERT: button
UPDATE: button::text " " => "f:b"
```

# Update
```html
q
```
## Change
```
INSERT: ::text("q")
REMOVE: ::text + button
```
