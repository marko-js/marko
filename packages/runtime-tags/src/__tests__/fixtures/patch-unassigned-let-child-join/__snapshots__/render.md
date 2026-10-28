# Render `{"v":"a","w":"1"}`
```html
<p>
  a1
</p>
```

# Update `{"v":"a","w":"2"}`
```html
<p>
  a2
</p>
```
## Change
```
UPDATE: p::text "a1" => "a2"
```
