# Render `{"label":"a","more":false,"n":1,"items":["x"]}`
```html
<p>
  f-a
</p>
```

# Update `{"label":"b","more":true,"n":2,"items":["z","x"]}`
```html
<p>
  f-b
</p>
```
## Change
```
UPDATE: p::text "f-a" => "f-b"
```

# Update `{"label":"c","more":false,"n":3,"items":["x"]}`
```html
<p>
  f-c
</p>
```
## Change
```
UPDATE: p::text "f-b" => "f-c"
```
