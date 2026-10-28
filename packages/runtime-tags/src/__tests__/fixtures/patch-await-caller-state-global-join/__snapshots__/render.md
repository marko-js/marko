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

# Update
```js
document.querySelector("button.swap").click();
```
```html
<button
  class="swap"
>
  swap
</button>
<p>
  bmce:swapped
</p>
```
## Change
```
UPDATE: p::text "bmce:a" => "bmce:swapped"
```

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```

# Update `{"promise":{},"$global":{"brand":"cmce","serializedGlobals":["brand"]}}`
```html
<button
  class="swap"
>
  swap
</button>
<p>
  cmce:swapped
</p>
```
## Change
```
UPDATE: p::text "bmce:swapped" => "cmce:swapped"
```

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
```
