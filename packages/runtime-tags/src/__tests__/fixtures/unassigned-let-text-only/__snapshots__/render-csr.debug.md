# Render `{"v":"a","w":"1"}`
```html
<p>
  a
</p>
<p>
  1
</p>
```

# Update `{"v":"b","w":"2"}`
```html
<p>
  a
</p>
<p>
  2
</p>
```
## Change
```
UPDATE: p:nth-of-type(2)::text "1" => "2"
```
