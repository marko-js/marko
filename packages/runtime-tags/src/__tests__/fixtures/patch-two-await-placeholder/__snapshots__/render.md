# Render `{"a":{},"b":{}}`
```html
<span>
  a1
</span>
<span>
  b1
</span>
```

# Update `{"a":{"value":"a2"},"b":{"value":"b2"}}`
```html
<span>
  a2
</span>
<span>
  b2
</span>
```
## Change
```
UPDATE: span:nth-of-type(1)::text "a1" => "a2"
UPDATE: span:nth-of-type(2)::text "b1" => "b2"
```
