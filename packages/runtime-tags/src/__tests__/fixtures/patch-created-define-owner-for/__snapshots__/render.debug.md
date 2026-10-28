# Render `{"on":false,"n":1,"w":"a"}`

# Update `{"on":true,"n":1,"w":"b"}`
```html
<li>
  1 b
</li>
<button>
  x
</button>
```
## Change
```
INSERT: li, button
UPDATE: li::text@2 "" => "b"
```

# Update `{"on":true,"n":1,"w":"c"}`
```html
<li>
  1 c
</li>
<button>
  x
</button>
```
## Change
```
UPDATE: li::text@2 "b" => "c"
```
