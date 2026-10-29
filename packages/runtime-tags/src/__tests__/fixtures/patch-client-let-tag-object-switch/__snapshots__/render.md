# Render `{"alt":false,"label":"a"}`
```html
<em>
  a
</em>
```

# Update `{"alt":true,"label":"b"}`
```html
<em>
  b
</em>
```
## Change
```
UPDATE: em::text "a" => "b"
```
