# Render `{"label":"a","more":false,"n":1,"items":["x"]}`
```html
<p>
  f-a1
</p>
```

# Update `{"label":"b","more":true,"n":2,"items":["z","x"]}`
```html
<p>
  f-b1
</p>
```
## Change
```
UPDATE: p::text "f-a1" => "f-b1"
```

# Update `{"label":"c","more":false,"n":3,"items":["x"]}`
```html
<p>
  f-c1
</p>
```
## Change
```
UPDATE: p::text "f-b1" => "f-c1"
```
