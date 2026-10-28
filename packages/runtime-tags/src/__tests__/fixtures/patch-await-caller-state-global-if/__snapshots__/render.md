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
assert.ok(document.querySelector("b"));
```
