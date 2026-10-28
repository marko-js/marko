# Render `{"items":[1],"w":"a"}`
```html
<p>
  1 a
</p>
```

# Update `{"items":[1,2],"w":"b"}`
```html
<p>
  1 b
</p>
```
## Change
```
UPDATE: p::text@2 "a" => "b"
```
