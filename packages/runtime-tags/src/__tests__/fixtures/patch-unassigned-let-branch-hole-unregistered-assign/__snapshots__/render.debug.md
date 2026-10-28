# Render `{"v":"a","w":"1"}`
```html
<span>
  function
</span>
<p>
  1
</p>
```

# Update `{"v":"a","w":"2"}`
```html
<span>
  function
</span>
<p>
  2
</p>
```
## Change
```
UPDATE: p::text "1" => "2"
```
