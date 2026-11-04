# Render `{"label":"a"}`
```html
<span>
  a!
</span>
<p>
  a
</p>
```

# Update `{"label":"b"}`
```html
<span>
  a!
</span>
<p>
  b
</p>
```
## Change
```
UPDATE: p::text "a" => "b"
```
