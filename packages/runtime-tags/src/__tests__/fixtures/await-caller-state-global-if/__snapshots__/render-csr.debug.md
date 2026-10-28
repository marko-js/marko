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
assert.ok(!document.querySelector("b"));
```
