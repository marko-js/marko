# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<p>
  b
</p>
<div />
```
## Change
```
INSERT: p, div
UPDATE: p::text " " => "b"
```

# Update `{"show":true,"label":"c"}`
```html
<p>
  c
</p>
<div />
```
## Change
```
UPDATE: p::text "b" => "c"
```
