# Render `{"promise":{},"$global":{"brand":"acme","serializedGlobals":["brand"]}}`
```html
<button
  class="swap"
>
  swap
</button>
```

# Update
```html
<button
  class="swap"
>
  swap
</button>
<span>
  acme
</span>
<b>
  a
</b>
```
## Change
```
INSERT: .swap + :is(span, b)
UPDATE: b::text " " => "a"
```

# Update
```js
assert.equal(document.querySelector("span").textContent, text);
```

# Update `{"promise":{},"$global":{"brand":"bmce","serializedGlobals":["brand"]}}`

# Update
```js
assert.equal(document.querySelector("span").textContent, text);
```
