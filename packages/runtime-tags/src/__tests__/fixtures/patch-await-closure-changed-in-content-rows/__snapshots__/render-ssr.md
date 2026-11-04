# Render `{"items":[1]}`
```html
loading
```

# Update
```html
<p>
  5
</p>
```
## Change
```
INSERT: p::text("5")
REMOVE: ::text("loading")
INSERT: p
UPDATE: p::text "1" => "5"
```
