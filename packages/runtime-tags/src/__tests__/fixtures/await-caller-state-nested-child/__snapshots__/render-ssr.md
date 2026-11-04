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
