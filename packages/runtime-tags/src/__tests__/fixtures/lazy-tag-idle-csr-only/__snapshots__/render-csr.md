# Render `{"value":1}`

# Update
```html
<span>
   
</span>
```
## Change
```
INSERT: span
```

# Update
```html
<span>
  1
</span>
```
## Change
```
UPDATE: span::text " " => "1"
```

# Update `{"value":2}`
```html
<span>
  2
</span>
```
## Change
```
UPDATE: span::text "1" => "2"
```
