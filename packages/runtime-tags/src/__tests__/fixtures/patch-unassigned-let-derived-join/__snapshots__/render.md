# Render `{"a":"a1","b":"b1"}`
```html
<p>
  a1!b1
</p>
```

# Update `{"a":"a2","b":"b2"}`
```html
<p>
  a1!b2
</p>
```
## Change
```
UPDATE: p::text "a1!b1" => "a1!b2"
```
