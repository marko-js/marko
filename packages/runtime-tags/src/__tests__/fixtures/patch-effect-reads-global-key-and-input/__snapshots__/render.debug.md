# Render `{"page":"a","n":1,"$global":{"user":{"name":"x"},"serializedGlobals":["user"]}}`
```html
<div
  title="a1"
>
  x:a1
</div>
```

# Update `{"page":"b","n":1,"$global":{"user":{"name":"x"},"serializedGlobals":["user"]}}`
```html
<div
  title="b1"
>
  x:b1
</div>
```
## Change
```
UPDATE: div[title] "a1" => "b1"
REMOVE: div::text("x:a1")
INSERT: div::text("x:b1")
```

# Update `{"page":"b","n":1,"$global":{"user":{"name":"y"},"serializedGlobals":["user"]}}`
```html
<div
  title="b1"
>
  y:b1
</div>
```
## Change
```
REMOVE: div::text("x:b1")
INSERT: div::text("y:b1")
```
