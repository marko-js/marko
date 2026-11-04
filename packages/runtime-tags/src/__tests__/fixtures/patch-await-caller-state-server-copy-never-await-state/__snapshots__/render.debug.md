# Render `{"label":"a","promise":{}}`
```html
<button
  class="swap"
>
  swap
</button>
<p>
  a
</p>
<button
  class="q"
>
  0
</button>
<b>
  k
</b>
```

# Update `{"label":"b","promise":{}}`

# Update
```js
assert.equal(document.querySelector("b").textContent, "k");
```
