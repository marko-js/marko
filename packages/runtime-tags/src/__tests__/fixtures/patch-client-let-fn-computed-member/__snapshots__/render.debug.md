# Render `{"label":"a","n":1}`
```html
<p>
  f-a
</p>
```

# Update `{"label":"b","n":1}`
```html
<p>
  f-b
</p>
```
## Change
```
UPDATE: p::text "f-a" => "f-b"
```
