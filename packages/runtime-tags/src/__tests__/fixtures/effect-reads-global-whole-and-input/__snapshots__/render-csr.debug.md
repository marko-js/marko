# Render `{"page":"a","$global":{"user":"x","serializedGlobals":["user"]}}`
```html
<div>
  x:a
</div>
```

# Update `{"page":"a","$global":{"user":"y","serializedGlobals":["user"]}}`

# Update `{"page":"b","$global":{"user":"y","serializedGlobals":["user"]}}`
```html
<div>
  x:b
</div>
```
## Change
```
REMOVE: div::text("x:a")
INSERT: div::text("x:b")
```
