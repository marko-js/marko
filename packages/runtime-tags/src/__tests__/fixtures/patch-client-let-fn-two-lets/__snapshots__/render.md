# Render `{"label":"a","more":false,"n":1,"items":["x"]}`
```html
<p>
  f-af-a
</p>
```

# Update `{"label":"b","more":true,"n":2,"items":["z","x"]}`
```html
<p>
  f-bf-b
</p>
```
## Change
```
UPDATE: p::text "f-af-a" => "f-bf-b"
```

# Update `{"label":"c","more":false,"n":3,"items":["x"]}`
```html
<p>
  f-cf-c
</p>
```
## Change
```
UPDATE: p::text "f-bf-b" => "f-cf-c"
```
