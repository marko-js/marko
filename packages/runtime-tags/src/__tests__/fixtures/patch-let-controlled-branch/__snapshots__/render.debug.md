# Render `{"v":""}`

# Update `{"v":"a"}`
```html
<p>
  yes a
</p>
```
## Change
```
INSERT: p
```

# Update `{"v":"b"}`
```html
<p>
  yes b
</p>
```
## Change
```
UPDATE: p::text@4 "a" => "b"
```
