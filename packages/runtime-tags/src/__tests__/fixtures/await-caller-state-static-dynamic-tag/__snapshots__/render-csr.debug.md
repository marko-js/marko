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
  a
</p>
<span>
  acme
</span>
```
## Change
```
INSERT: .swap + :is(p, span)
UPDATE: p::text " " => "a"
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
