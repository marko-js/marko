# Render `{"label":"a","n":1}`
```html
<p>
  f-a1
</p>
```

# Update `{"label":"b","n":1}`
```html
<p>
  f-b1
</p>
```
## Change
```
UPDATE: p::text "f-a1" => "f-b1"
```

# Update `{"label":"c","n":2}`
```html
<p>
  f-c1
</p>
```
## Change
```
UPDATE: p::text "f-b1" => "f-c1"
```
