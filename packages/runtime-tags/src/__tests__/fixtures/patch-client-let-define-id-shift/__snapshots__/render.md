# Render `{"label":"a","more":false,"n":1,"items":["x"]}`
```html
<p>
  a
</p>
```

# Update `{"label":"b","more":true,"n":2,"items":["z","x"]}`
```html
<i>
  prefix
</i>
<p>
  b
</p>
```
## Change
```
INSERT: i
UPDATE: p::text "a" => "b"
```

# Update `{"label":"c","more":false,"n":3,"items":["x"]}`
```html
<p>
  c
</p>
```
## Change
```
REMOVE: i
UPDATE: p::text "b" => "c"
```
