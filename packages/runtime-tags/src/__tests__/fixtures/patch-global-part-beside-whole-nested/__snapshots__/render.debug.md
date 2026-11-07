# Render `{"show":true,"$global":{"meta":{"title":"a","flag":1},"serializedGlobals":["meta"]}}`
```html
<p>
  a:1
</p>
```

# Update `{"show":true,"$global":{"meta":{"title":"b","flag":2},"serializedGlobals":["meta"]}}`
```html
<p>
  b:2
</p>
```
## Change
```
UPDATE: p::text "a:1" => "b:2"
```
