# Render `{"list":[1,2]}`
```html
<p>
  1,2
</p>
```

# Update `{"list":[1,2,3]}`
```html
<p>
  1,2,3
</p>
```
## Change
```
UPDATE: p::text "1,2" => "1,2,3"
```
