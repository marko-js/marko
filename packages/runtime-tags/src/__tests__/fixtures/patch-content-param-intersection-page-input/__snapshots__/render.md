# Render `{"a":"a1","b":"b1","obj":{"x":"x1"}}`
```html
<i>
  b1
</i>
<p>
  a1x1
</p>
```

# Update `{"a":"a2","b":"b2","obj":{"x":"x1"}}`
```html
<i>
  b2
</i>
<p>
  a2x1
</p>
```
## Change
```
UPDATE: i::text "b1" => "b2"
UPDATE: p::text "a1x1" => "a2x1"
```

# Update `{"a":"a2","b":"b2","obj":{"x":"x2"}}`
```html
<i>
  b2
</i>
<p>
  a2x2
</p>
```
## Change
```
UPDATE: p::text "a2x1" => "a2x2"
```

# Update `{"a":"a3","b":"b3","obj":{"x":"x3"}}`
```html
<i>
  b3
</i>
<p>
  a3x3
</p>
```
## Change
```
UPDATE: i::text "b2" => "b3"
UPDATE: p::text "a2x2" => "a3x3"
```
