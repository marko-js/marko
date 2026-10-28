# Render `{"a":"x","b":"1"}`
```html
<p>
  x
</p>
<p>
  x1
</p>
```

# Update `{"a":"y","b":"2"}`
```html
<p>
  x
</p>
<p>
  x2
</p>
```
## Change
```
UPDATE: p:nth-of-type(2)::text "x1" => "x2"
```
