# Render `{"promise":{},"$global":{"brand":"acme","serializedGlobals":["brand"]}}`
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
<div>
  <p>
    a
  </p>
  <span>
    bmce
  </span>
</div>
```
## Change
```
UPDATE: div > span::text "acme" => "bmce"
```

# Update
```js
assert.equal(document.querySelector("span").textContent, text);
```
