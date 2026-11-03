# Render `{"on":false,"n":1,"w":"a"}`

# Update `{"on":true,"n":1,"w":"b"}`
```html
<p>
  b
</p>
<button>
  x
</button>
```
## Change
```
INSERT: p, button
UPDATE: p::text " " => "b"
```

# Update `{"on":true,"n":1,"w":"c"}`
```html
<p>
  c
</p>
<button>
  x
</button>
```
## Change
```
UPDATE: p::text "b" => "c"
```
