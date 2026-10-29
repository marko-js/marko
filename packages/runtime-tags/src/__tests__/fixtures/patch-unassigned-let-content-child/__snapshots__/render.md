# Render `{"show":true,"v":"a","w":"1","items":["a","b"]}`
```html
<button>
  0
</button>
<p>
  1
</p>
```

# Update `{"show":false,"v":"b","w":"2","items":["c"]}`
```html
<button>
  0
</button>
<p>
  2
</p>
```
## Change
```
UPDATE: p::text "1" => "2"
```

# Update `{"show":true,"v":"c","w":"3","items":["d","e"]}`
```html
<button>
  0
</button>
<p>
  3
</p>
```
## Change
```
UPDATE: p::text "2" => "3"
```
