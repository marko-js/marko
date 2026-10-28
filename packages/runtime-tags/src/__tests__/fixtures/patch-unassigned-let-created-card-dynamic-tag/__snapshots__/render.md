# Render `{"on":false,"n":0,"w":"a","items":[]}`

# Update `{"on":true,"n":1,"w":"b","items":["x","y"]}`
```html
<b>
  b
</b>
```
## Change
```
INSERT: b
UPDATE: b::text " " => "b"
```

# Update `{"on":true,"n":0,"w":"c","items":["z"]}`
```html
<b>
  c
</b>
```
## Change
```
UPDATE: b::text "b" => "c"
```
