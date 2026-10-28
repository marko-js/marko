# Render `{"promise":{},"other":{}}`
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
  a
</b>
```

# Update `{"promise":{},"other":{}}`
```html
<button
  class="swap"
>
  swap
</button>
<p>
  a
</p>
<span>
  caught
</span>
```
## Change
```
INSERT: p + span
REMOVE: span + b
```
