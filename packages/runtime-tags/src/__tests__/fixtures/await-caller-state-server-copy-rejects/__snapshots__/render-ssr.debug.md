# Render `{"label":"a","promise":{"value":"a"}}`
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
  a:a
</p>
```
## Change
```
INSERT: .swap + p
INSERT: p::text("a:")
INSERT: p::text@0 + ::text("a")
```
