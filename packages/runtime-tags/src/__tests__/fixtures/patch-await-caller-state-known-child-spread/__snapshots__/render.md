# Render `{"promise":{},"$global":{"brand":"acme","serializedGlobals":["brand"]}}`
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

# Update
```js
assert.equal(document.querySelector("span").textContent, text);
```

# Update `{"promise":{},"$global":{"brand":"bmce","serializedGlobals":["brand"]}}`
```html
<button
  class="swap"
>
  swap
</button>
<span>
  bmce
</span>
<b>
  a
</b>
```
## Change
```
UPDATE: span::text "acme" => "bmce"
```

# Update
```js
assert.equal(document.querySelector("span").textContent, text);
```
