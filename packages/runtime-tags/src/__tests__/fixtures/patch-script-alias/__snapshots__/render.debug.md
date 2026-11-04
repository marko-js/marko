# Render `{"value":"v1","title":"t1"}`
```html
<h1>
  t1
</h1>
```

# Update `{"value":"v2","title":"t2"}`
```html
<h1>
  t2
</h1>
```
## Change
```
UPDATE: h1::text "t1" => "t2"
REMOVE: #document > html > head > title::text("v1")
INSERT: #document > html > head > title::text("v2")
```
