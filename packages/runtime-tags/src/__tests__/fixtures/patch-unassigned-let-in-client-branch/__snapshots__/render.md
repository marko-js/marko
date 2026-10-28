# Render `{"v":"a","w":"1"}`
```html
<button>
  toggle
</button>
<p>
  A 1
</p>
```

# Update `{"v":"b","w":"2"}`
```html
<button>
  toggle
</button>
<p>
  A 2
</p>
```
## Change
```
UPDATE: p::text@2 "1" => "2"
```

# Update `{"v":"c","w":"3"}`
```html
<button>
  toggle
</button>
<p>
  A 3
</p>
```
## Change
```
UPDATE: p::text@2 "2" => "3"
```
