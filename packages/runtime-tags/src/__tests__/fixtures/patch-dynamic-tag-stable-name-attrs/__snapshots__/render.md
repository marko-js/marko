# Render `{"x":1,"y":"y"}`
```html
<b>
  Ry
</b>
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
<b>
  Rz
</b>
```
## Change
```
UPDATE: b:nth-of-type(1)::text@1 "y" => "z"
UPDATE: b:nth-of-type(2)::text@1 "y" => "z"
```
