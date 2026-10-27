# Render `{"title":"a","fail":false,"slow":{"value":"s1"}}`
```html
<p>
  a
</p>
```

# Update
```html
<em>
  s1
</em>
```
## Change
```
INSERT: em::text("s1")
REMOVE: p
INSERT: em
```

# Update `{"title":"b","fail":true,"slow":{"value":"s2"}}`
```html
<em>
  s2
</em>
```
## Change
```
UPDATE: em::text "s1" => "s2"
```
