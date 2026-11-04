# Render `{"a":"a1","obj":{"x":"x1"}}`
```html
<p>
  a1x1
</p>
<output>
  x1
</output>
```

# Update `{"a":"a2","obj":{"x":"x1"}}`
```html
<p>
  a2x1
</p>
<output>
  x1
</output>
```
## Change
```
UPDATE: p::text "a1x1" => "a2x1"
```

# Update `{"a":"a2","obj":{"x":"x2"}}`
```html
<p>
  a2x2
</p>
<output>
  x2
</output>
```
## Change
```
UPDATE: p::text "a2x1" => "a2x2"
REMOVE: output::text("x1")
INSERT: output::text("x2")
```
