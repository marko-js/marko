# Render `{"show":false,"p":{},"$global":{"f":"1","serializedGlobals":["f"]}}`

# Update `{"show":true,"p":{},"$global":{"f":"2","serializedGlobals":["f"]}}`
```html
<p>
  b:2
</p>
```
## Change
```
INSERT: p
```

# Update `{"show":true,"p":{},"$global":{"f":"3","serializedGlobals":["f"]}}`
```html
<p>
  c:3
</p>
```
## Change
```
UPDATE: p::text "b:2" => "c:3"
```
