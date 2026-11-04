# Render `{"page":"a","$global":{"user":"x","serializedGlobals":["user"]}}`
```html
<div>
  x:a
</div>
```

# Update `{"page":"a","$global":{"user":"y","serializedGlobals":["user"]}}`
```html
<div>
  y:a
</div>
```
## Change
```
REMOVE: div::text("x:a")
INSERT: div::text("y:a")
```

# Update `{"page":"b","$global":{"user":"y","serializedGlobals":["user"]}}`
```html
<div>
  y:b
</div>
```
## Change
```
REMOVE: div::text("y:a")
INSERT: div::text("y:b")
```
