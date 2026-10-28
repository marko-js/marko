# Render `{"v":"a","w":"1"}`
```html
<p>
  a 1
</p>
```

# Update `{"v":"b","w":"2"}`
```html
<p>
  a 2
</p>
```
## Change
```
UPDATE: p::text@2 "1" => "2"
```
