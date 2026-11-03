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
UPDATE: t > b::text "a" => "b"
INSERT: p, div
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
UPDATE: t > b::text "b" => "c"
UPDATE: p::text "b" => "c"
```
