# Render `{"alt":false,"more":false,"label":"a"}`

# Update `{"alt":false,"more":true,"label":"b"}`
```html
<em>
  b
</em>
```
## Change
```
INSERT: em
UPDATE: em::text " " => "b"
```

# Update `{"alt":true,"more":true,"label":"c"}`
```html
<em>
  c
</em>
```
## Change
```
UPDATE: em::text "b" => "c"
```
