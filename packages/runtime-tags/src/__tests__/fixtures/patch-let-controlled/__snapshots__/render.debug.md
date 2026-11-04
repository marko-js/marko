# Render `{"v":"a","w":"1"}`
```html
<p>
  a1
</p>
```

# Update `{"v":"b","w":"2"}`
```html
<p>
  b2
</p>
```
## Change
```
UPDATE: p::text "a1" => "b2"
```
