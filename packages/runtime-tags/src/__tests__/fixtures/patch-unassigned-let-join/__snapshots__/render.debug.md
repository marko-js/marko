# Render `{"v":"a","w":"1"}`
```html
<p>
  a
</p>
<p>
  a1
</p>
```

# Update `{"v":"b","w":"2"}`
```html
<p>
  a
</p>
<p>
  a2
</p>
```
## Change
```
UPDATE: p:nth-of-type(2)::text "a1" => "a2"
```
