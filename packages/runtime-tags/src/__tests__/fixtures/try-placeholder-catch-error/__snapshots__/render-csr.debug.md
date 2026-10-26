# Render `{"title":"b","fail":true,"slow":{"value":"s2"}}`

# Update
```html
<p>
  boom b
</p>
```
## Change
```
INSERT: p
INSERT: p
REMOVE: p + p
UPDATE: p::text " " => "boom b"
```

# Update
```html
<em>
  s2
</em>
```
## Change
```
INSERT: em
REMOVE: em + p
```
