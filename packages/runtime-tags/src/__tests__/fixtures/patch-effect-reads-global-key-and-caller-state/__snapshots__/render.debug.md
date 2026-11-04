# Render `{"n":1,"$global":{"user":{"name":"x"},"serializedGlobals":["user"]}}`
```html
<div
  title="p1"
>
  x:p1
</div>
<button>
  go
</button>
```

# Update `{"n":2,"$global":{"user":{"name":"x"},"serializedGlobals":["user"]}}`
```html
<div
  title="p2"
>
  x:p2
</div>
<button>
  go
</button>
```
## Change
```
REMOVE: div::text("x:p1")
INSERT: div::text("x:p2")
UPDATE: div[title] "p1" => "p2"
```

# Update `{"n":2,"$global":{"user":{"name":"y"},"serializedGlobals":["user"]}}`
```html
<div
  title="p2"
>
  y:p2
</div>
<button>
  go
</button>
```
## Change
```
REMOVE: div::text("x:p2")
INSERT: div::text("y:p2")
```
