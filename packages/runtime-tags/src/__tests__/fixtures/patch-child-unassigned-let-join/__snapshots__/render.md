# Render `{"a":"x","b":"1"}`
```html
<p>
  x1
</p>
```

# Update `{"a":"y","b":"2"}`
```html
<p>
  x2
</p>
```
## Change
```
UPDATE: p::text "x1" => "x2"
```

# Update `{"a":"z","b":"3"}`
```html
<p>
  x3
</p>
```
## Change
```
UPDATE: p::text "x2" => "x3"
```
