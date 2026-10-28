# Render `{"$global":{"v":"a","serializedGlobals":["v"]},"w":"1"}`
```html
<p>
  a1
</p>
```

# Update `{"$global":{"v":"a","serializedGlobals":["v"]},"w":"2"}`
```html
<p>
  a2
</p>
```
## Change
```
UPDATE: p::text "a1" => "a2"
```
