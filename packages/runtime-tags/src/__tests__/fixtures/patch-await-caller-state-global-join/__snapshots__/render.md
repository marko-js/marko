# Render `{"promise":{},"$global":{"brand":"acme","serializedGlobals":["brand"]}}`
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

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```

# Update `{"promise":{},"$global":{"brand":"bmce","serializedGlobals":["brand"]}}`
```html
<button
  class="swap"
>
  swap
</button>
<p>
  bmce:a
</p>
```
## Change
```
UPDATE: p::text "acme:a" => "bmce:a"
```

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```
