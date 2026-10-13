# Render `{"page":0,"attrs":{"data-x":"0"},"$global":{"cspNonce":"doc"}}`
```html
<p>
  a
</p>
```

# Update `{"page":1,"attrs":{"data-x":"1"},"$global":{"cspNonce":"patch1"}}`
## Change
```
REMOVE: p
INSERT: style, style
UPDATE: style[data-x] "0" => "1"
REMOVE: style::text("p.u { --page: 0 }")
INSERT: style::text("p.u { --page: 1 }")
```

# Update
```js
const nonces = [...document.querySelectorAll("style")].map((style) =>
style.getAttribute("nonce"),
  );
  assert.deepEqual(nonces.at(-1), "doc");
  assert.ok(!nonces.some((nonce) => nonce?.startsWith("patch")));
```

# Update `{"page":2,"attrs":{"data-x":"2"},"$global":{"cspNonce":"patch2"}}`
## Change
```
UPDATE: style[data-x] "1" => "2"
UPDATE: style[data-x] "1" => "2"
REMOVE: style::text("p.u { --page: 1 }")
INSERT: style::text("p.u { --page: 2 }")
```

# Update
```js
const nonces = [...document.querySelectorAll("style")].map((style) =>
style.getAttribute("nonce"),
  );
  assert.deepEqual(nonces.at(-1), "doc");
  assert.ok(!nonces.some((nonce) => nonce?.startsWith("patch")));
```
