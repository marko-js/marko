# Render `{"promise":{},"$global":{"flag":false,"serializedGlobals":["flag"]}}`
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
```
## Change
```
INSERT: .swap + p
UPDATE: p::text " " => "a"
```

# Update `{"promise":{},"$global":{"flag":true,"serializedGlobals":["flag"]}}`

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
assert.equal(!!document.querySelector("b"), on);
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
  swapped
</p>
```
## Change
```
UPDATE: p::text "a" => "swapped"
```

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
assert.equal(!!document.querySelector("b"), on);
```

# Update `{"promise":{},"$global":{"flag":false,"serializedGlobals":["flag"]}}`

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
assert.equal(!!document.querySelector("b"), on);
```
