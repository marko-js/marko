# Render `{"label":"a","n":[1,2]}`
```html
<p>
  f-a1,2
</p>
```

# Update `{"label":"b","n":[1,2]}`
```html
<p>
  f-b1,2
</p>
```
## Change
```
UPDATE: p::text "f-a1,2" => "f-b1,2"
```
