# Render `{"page":0,"$global":{"cspNonce":"doc","serializedGlobals":{"cspNonce":true}}}`
```html
<p>
  a
</p>
```

# Update `{"page":1,"$global":{"cspNonce":"patch","serializedGlobals":{"cspNonce":true}}}`
## Change
```
REMOVE: p
INSERT: style
UPDATE: style[nonce] null => "doc"
```
