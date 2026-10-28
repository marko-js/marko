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
<p>
  acme:a
</p>
```
## Change
```
INSERT: .swap + p
UPDATE: p::text " " => "acme:a"
```

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```

# Update `{"promise":{},"$global":{"brand":"bmce","serializedGlobals":["brand"]}}`

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```
