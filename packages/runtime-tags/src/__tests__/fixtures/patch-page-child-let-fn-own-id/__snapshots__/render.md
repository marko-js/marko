# Render `{"label":"a","alt":false}`
```html
<p>
  f-a
</p>
```

# Update `{"label":"b","alt":false}`
```html
<p>
  f-b
</p>
```
## Change
```
UPDATE: p::text "f-a" => "f-b"
```

# Update `{"label":"c","alt":true}`
```html
<p>
  f-c
</p>
```
## Change
```
UPDATE: p::text "f-b" => "f-c"
```
