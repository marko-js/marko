# Render `{"v":"a","w":"1"}`
```html
<p>
  a1
</p>
```
## Console
```
LOG "v" "a"
```

# Update `{"v":"b","w":"2"}`
```html
<p>
  a2
</p>
```
## Change
```
UPDATE: p::text@1 "1" => "2"
```
