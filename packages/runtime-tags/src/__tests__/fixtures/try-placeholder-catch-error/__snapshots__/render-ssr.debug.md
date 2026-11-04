# Render `{"title":"b","fail":true,"slow":{"value":"s2"}}`
```html
<p>
  boom b
</p>
```

# Update
```html
<em>
  s2
</em>
```
## Change
```
INSERT: em::text("s2")
REMOVE: p
INSERT: em
```
