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
<div>
  <p>
    a
  </p>
  <span>
    acme
  </span>
</div>
```
## Change
```
INSERT: .swap + div
UPDATE: div > p::text " " => "a"
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
