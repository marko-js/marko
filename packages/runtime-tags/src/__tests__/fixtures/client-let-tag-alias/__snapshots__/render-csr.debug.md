# Render `{"label":"a","more":false,"n":1,"items":["x"]}`
```html
<em>
  a
</em>
```

# Update `{"label":"b","more":true,"n":2,"items":["z","x"]}`
```html
<em>
  b
</em>
```
## Change
```
UPDATE: em::text "a" => "b"
```

# Update `{"label":"c","more":false,"n":3,"items":["x"]}`
```html
<em>
  c
</em>
```
## Change
```
UPDATE: em::text "b" => "c"
```
