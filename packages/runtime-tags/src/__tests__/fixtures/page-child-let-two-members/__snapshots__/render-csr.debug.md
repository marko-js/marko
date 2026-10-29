# Render `{"label":"a","alt":false}`
```html
<em>
  a
</em>
<p>
  f-a
</p>
```

# Update `{"label":"b","alt":false}`
```html
<em>
  b
</em>
<p>
  f-b
</p>
```
## Change
```
UPDATE: p::text "f-a" => "f-b"
UPDATE: em::text "a" => "b"
```

# Update `{"label":"c","alt":true}`
```html
<em>
  c
</em>
<p>
  f-c
</p>
```
## Change
```
UPDATE: p::text "f-b" => "f-c"
UPDATE: em::text "b" => "c"
```
