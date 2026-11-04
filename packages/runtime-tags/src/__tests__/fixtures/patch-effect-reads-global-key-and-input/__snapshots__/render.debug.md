# Render `{"page":"a","$global":{"user":{"name":"x"},"serializedGlobals":["user"]}}`
```html
<div>
  x:a
</div>
```

# Update `{"page":"b","$global":{"user":{"name":"x"},"serializedGlobals":["user"]}}`
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

# Update `{"page":"b","$global":{"user":{"name":"y"},"serializedGlobals":["user"]}}`
```html
<div>
  y:b
</div>
```
## Change
```
REMOVE: div::text("x:b")
INSERT: div::text("y:b")
```
