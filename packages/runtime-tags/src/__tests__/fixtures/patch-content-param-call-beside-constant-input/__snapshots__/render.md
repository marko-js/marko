# Render `{"items":[{"id":1,"label":"a"}]}`
```html
<i>
  a!
</i>
```

# Update `{"items":[{"id":1,"label":"b"}]}`
```html
<i>
  b!
</i>
```
## Change
```
UPDATE: i::text "a!" => "b!"
```
