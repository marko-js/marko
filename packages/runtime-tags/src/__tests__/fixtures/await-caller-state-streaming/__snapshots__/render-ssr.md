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

# Update
```html
<button
  class="swap"
>
  swap
</button>
<p>
  a:client
</p>
```
## Change
```
INSERT: p::text("a:")
INSERT: p::text@0 + ::text("client")
REMOVE: em
INSERT: .swap + p
UPDATE: p::text@2 "2" => "client"
```
