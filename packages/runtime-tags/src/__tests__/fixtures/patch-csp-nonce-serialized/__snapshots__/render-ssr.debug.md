# Render `{"page":0,"$global":{"cspNonce":"doc"}}`
```html
<p>
  a
</p>
```

# Update `{"page":1,"$global":{"cspNonce":"patch"}}`
## Change
```
REMOVE: p
INSERT: style
```

# Update
```js
assert.deepEqual(
[...document.querySelectorAll("style")].map((style) =>
  style.getAttribute("nonce"),
),
["doc"],
  );
```
