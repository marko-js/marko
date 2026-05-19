# Render

# Update
```html
loading...
```
## Change
```
INSERT: ::text("loading...")
```

# Update
```html
0
```
## Change
```
INSERT: ::text("0")
REMOVE: ::text + ::text("loading...")
UPDATE: ::text " " => "0"
```

# Update
```html
1
```
## Change
```
UPDATE: ::text "0" => "1"
```
