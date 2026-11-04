# Render `{"promise":{},"$global":{"flag":false,"serializedGlobals":["flag"]}}`
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

# Update `{"promise":{},"$global":{"flag":true,"serializedGlobals":["flag"]}}`
```html
<button
  class="swap"
>
  swap
</button>
<p>
  a
</p>
<b>
  on
</b>
```
## Change
```
INSERT: p + b
```

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
<b>
  on
</b>
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
REMOVE: p + b
```

# Update
```js
assert.equal(document.querySelector("p").textContent, text);
assert.equal(!!document.querySelector("b"), on);
```
