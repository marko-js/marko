# Render `{"x":1,"y":"y"}`
```html
<div
  class="y"
/>
```

# Update `{"x":2,"y":"y"}`

# Update `{"x":1,"y":"z"}`
```html
<div
  class="z"
/>
```
## Change
```
UPDATE: .z[class] "y" => "z"
```
