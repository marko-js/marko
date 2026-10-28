# Render `{"v":"a","w":"1"}`
```html
<em>
  a1
</em>
```

# Update `{"v":"a","w":"2"}`
```html
<em>
  a2
</em>
```
## Change
```
UPDATE: em::text "a1" => "a2"
```
