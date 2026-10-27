# Render `{"$global":{"cspNonce":"doc","x":"a","serializedGlobals":["x"]}}`
```html
<p>
  a
</p>
<div
  data-runs="1"
>
  doc
</div>
```

# Update `{"$global":{"cspNonce":"patch","x":"b","serializedGlobals":["x"]}}`
```html
<p>
  b
</p>
<div
  data-runs="1"
>
  doc
</div>
```
## Change
```
UPDATE: p::text "a" => "b"
```
