# Render `{"show":true,"w":"1"}`
```html
<p>
  1
</p>
<button>
  log
</button>
```

# Update `{"show":false,"w":"2"}`
```html
<p>
  2
</p>
<button>
  log
</button>
```
## Change
```
UPDATE: p::text "1" => "2"
```
