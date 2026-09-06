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
INSERT: em
REMOVE: em + span
REMOVE: em + span
INSERT: span, span
REMOVE: span:nth-of-type(2) + em
UPDATE: span:nth-of-type(2)::text "b1" => "b2"
```
