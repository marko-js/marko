# Render `{"label":"a"}`
```html
<em>
  a
</em>
```

# Update `{"label":"b"}`
```html
<em>
  b
</em>
```
## Change
```
UPDATE: em::text "a" => "b"
```

# Update `{"label":"c"}`
```html
<em>
  c
</em>
```
## Change
```
UPDATE: em::text "b" => "c"
```
