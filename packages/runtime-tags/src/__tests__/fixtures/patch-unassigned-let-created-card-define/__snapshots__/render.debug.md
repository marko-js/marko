# Render `{"on":false,"n":0,"w":"a","items":[]}`

# Update `{"on":true,"n":1,"w":"b","items":["x","y"]}`
```html
<p>
  b
</p>
```
## Change
```
INSERT: p
UPDATE: p::text " " => "b"
```

# Update `{"on":true,"n":0,"w":"c","items":["z"]}`
```html
<p>
  c
</p>
```
## Change
```
UPDATE: p::text "b" => "c"
```
