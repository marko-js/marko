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
  a
</p>
```
## Change
```
INSERT: .swap + p
INSERT: p::text("a")
```
