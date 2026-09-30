# Render

# Update
```html
loading outer...
```
## Change
```
INSERT: ::text("loading outer...")
```

# Update
## Change
```
REMOVE: ::text("loading outer...")
```

# Update
```html
caught: load failed
```
## Change
```
INSERT: ::text("caught: "), ::text("load failed")
UPDATE: ::text@8 "" => "load failed"
```
