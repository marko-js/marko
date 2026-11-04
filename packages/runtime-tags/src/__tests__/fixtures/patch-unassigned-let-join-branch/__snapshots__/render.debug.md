# Render `{"a":"a1","b":"b1","show":true}`
```html
<p>
  a1b1
</p>
```

# Update `{"a":"a2","b":"b2","show":true}`
```html
<p>
  a1b2
</p>
```
## Change
```
UPDATE: p::text "a1b1" => "a1b2"
```
