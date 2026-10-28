# Render `{"on":false,"n":0,"w":"a","items":[]}`

# Update `{"on":true,"n":1,"w":"b","items":["x","y"]}`
```html
<li>
  xb
</li>
<li>
  yb
</li>
```
## Change
```
INSERT: li, li
UPDATE: li:nth-of-type(1)::text@1 "" => "b"
UPDATE: li:nth-of-type(2)::text@1 "" => "b"
```

# Update `{"on":true,"n":0,"w":"c","items":["z"]}`
```html
<li>
  xc
</li>
<li>
  yc
</li>
```
## Change
```
UPDATE: li:nth-of-type(1)::text@1 "b" => "c"
UPDATE: li:nth-of-type(2)::text@1 "b" => "c"
```
