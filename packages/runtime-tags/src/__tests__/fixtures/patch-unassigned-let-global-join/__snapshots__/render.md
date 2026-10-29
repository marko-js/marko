# Render `{"a":"a1","$global":{"flag":"f1","serializedGlobals":["flag"]}}`
```html
<p>
  a1f1
</p>
```

# Update `{"a":"a2","$global":{"flag":"f2","serializedGlobals":["flag"]}}`
```html
<p>
  a1f2
</p>
```
## Change
```
UPDATE: p::text "a1f1" => "a1f2"
```
