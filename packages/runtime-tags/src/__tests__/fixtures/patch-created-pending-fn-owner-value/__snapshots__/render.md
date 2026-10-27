# Render `{"label":"a","promise":{}}`
```html
p
```

# Update `{"label":"b","promise":{"value":"q"}}`
```html
q
```
## Change
```
INSERT: button
REMOVE: button + ::text("q")
UPDATE: button::text " " => "f:b"
INSERT: ::text("q")
REMOVE: ::text + button
```
