# Render `{"x":"1","pick":true}`
```html
<p>
  none
</p>
```

# Update `{"x":"2","pick":false}`
```html
<p>
  a1
</p>
```
## Change
```
UPDATE: p::text "none" => "a1"
```

# Update
```html
<p>
  b2
</p>
```
## Change
```
UPDATE: p::text "a1" => "b2"
```

# Update `{"x":"3","pick":false}`
```html
<p>
  b3
</p>
```
## Change
```
UPDATE: p::text "b2" => "b3"
```
