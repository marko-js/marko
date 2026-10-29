# Render `{"show":true,"v":"a","w":"1","items":["a","b"]}`
```html
<button>
  set
</button>
<p>
  a 1
</p>
```

# Update `{"show":false,"v":"b","w":"2","items":["c"]}`
```html
<button>
  set
</button>
<p>
  a 2
</p>
```
## Change
```
UPDATE: p::text@2 "1" => "2"
```

# Update `{"show":true,"v":"c","w":"3","items":["d","e"]}`
```html
<button>
  set
</button>
<p>
  a 3
</p>
```
## Change
```
UPDATE: p::text@2 "2" => "3"
```
