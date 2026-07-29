# Render `{"a":true,"b":true,"name":"W1DGT","price":54321,"badge":"B4DGE","$global":{"persisted":true,"persistedHeldShells":true,"persistedToken":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<button
  class="tap"
>
  tap 0
</button>
<p
  class="info"
>
  W1DGT/54321
</p>
<button
  class="bump"
>
  bump 0
</button>
<span
  class="badge"
>
  b4dge
</span>
```

# Update `{"a":true,"b":true,"name":"W1DGT","price":54321,"badge":"B4DGE","$global":{"persisted":true,"persistedHeldShells":true,"persistedToken":true}}`

# Update `{"a":true,"b":true,"name":"W1DGT","price":54321,"badge":"B4DGE","$global":{"persisted":true,"persistedHeldShells":true,"persistedToken":true}}`

# Update `{"a":true,"b":true,"name":"W1DGT","price":54321,"badge":"B4DGE","$global":{"persisted":true,"persistedHeldShells":true,"persistedToken":true}}`

# Update `{"a":true,"b":true,"name":"W1DGT","price":54321,"badge":"B4DGE","$global":{"persisted":true,"persistedHeldShells":true,"persistedToken":true}}`

# Update
```js
assert.equal(text(document, "p.info"), "W1DGT/54321");
assert.equal(text(document, "span.badge"), "b4dge");
```

# Update
```js
document.querySelector("button.tap").click();
```
```html
<button
  class="count"
>
  clicked 0
</button>
<button
  class="tap"
>
  tap 1
</button>
<p
  class="info"
>
  W1DGT/54321
</p>
<button
  class="bump"
>
  bump 0
</button>
<span
  class="badge"
>
  b4dge
</span>
```
## Change
```
UPDATE: .tap::text@4 "0" => "1"
```

# Update `{"a":true,"b":true,"name":"W1DGT","price":98765,"badge":"B4DGE","$global":{"persisted":true,"persistedHeldShells":true,"persistedToken":true}}`
```html
<button
  class="count"
>
  clicked 0
</button>
<button
  class="tap"
>
  tap 1
</button>
<p
  class="info"
>
  W1DGT/98765
</p>
<button
  class="bump"
>
  bump 0
</button>
<span
  class="badge"
>
  b4dge
</span>
```
## Change
```
UPDATE: .info::text "W1DGT/54321" => "W1DGT/98765"
```

# Update `{"a":true,"b":true,"name":"W1DGT","price":98765,"badge":"B4DGE","$global":{"persisted":true,"persistedHeldShells":true,"persistedToken":true}}`

# Update
```js
assert.equal(text(document, "p.info"), "W1DGT/98765");
assert.equal(text(document, "span.badge"), "b4dge");
assert.equal(text(document, "button.tap"), "tap 1");
// Guards every assertion above against passing vacuously.
assert.ok(seenKeys > 0, "no group key was inspected");
assert.ok(seenDispatches > 0, "no group dispatch was inspected");
```
