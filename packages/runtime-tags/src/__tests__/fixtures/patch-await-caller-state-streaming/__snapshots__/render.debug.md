# Render `{"label":"a","promise":{"value":2}}`
```html
<button
  class="swap"
>
  swap
</button>
<em>
  loading
</em>
```

# Update
```js
document.querySelector("button.swap").click();
```

# Update `{"label":"b","promise":{"value":2}}`

# Update
```html
<button
  class="swap"
>
  swap
</button>
<p>
  b:client
</p>
```
## Change
```
INSERT: p::text("b")
INSERT: p::text@0 + ::text(":")
INSERT: p::text@1 + ::text("client")
REMOVE: em
INSERT: .swap + p
UPDATE: p::text@2 "2" => "client"
UPDATE: p::text@0 "a" => "b"
```

# Update
```js
assert.match(document.querySelector("p").textContent, /:client$/);
```
