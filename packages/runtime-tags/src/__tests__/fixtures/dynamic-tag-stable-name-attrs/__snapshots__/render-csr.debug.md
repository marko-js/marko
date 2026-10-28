# Render `{"x":1,"y":"y"}`
```html
<b>
  Ry
</b>
```

# Update `{"x":2,"y":"y"}`

# Update `{"x":1,"y":"z"}`
```html
<b>
  Rz
</b>
```
## Change
```
UPDATE: b::text@1 "y" => "z"
```
