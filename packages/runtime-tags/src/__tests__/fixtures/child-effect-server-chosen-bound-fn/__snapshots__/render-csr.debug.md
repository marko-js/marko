# Render `{"x":"1","pick":true}`
```html
<p>
  none
</p>
```

# Update `{"x":"2","pick":false}`

# Update `{"x":"3","pick":false}`
```html
<p>
  b2
</p>
```
## Change
```
UPDATE: p::text "none" => "b2"
```
