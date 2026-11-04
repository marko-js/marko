# Render `{"label":"a","promise":{"value":"client"}}`
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
<p
  title="client"
>
  a:client:CLIENT:aclient
</p>
<span>
  6
</span>
```
## Change
```
INSERT: .swap + p
INSERT: p::text("a:")
INSERT: p::text@0 + ::text("client")
INSERT: p::text@2 + ::text(":")
INSERT: p::text@8 + ::text("CLIENT")
INSERT: p::text@9 + ::text(":")
INSERT: p::text@15 + ::text("aclient")
INSERT: p + span
INSERT: span::text("6")
```
