# Render `{"promise":{},"$global":{"brand":"acme","serializedGlobals":["brand"]}}`
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
<p>
  a
</p>
<span>
  bmce
</span>
```
## Change
```
UPDATE: span::text "acme" => "bmce"
```

# Update
```js
assert.equal(document.querySelector("span").textContent, text);
```
