# Render `{"label":"a","promise":{}}`
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
<button
  class="q"
>
  0
</button>
```
## Change
```
INSERT: .swap + :is(p, .q)
UPDATE: p::text " " => "a"
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
<button
  class="q"
>
  0
</button>
<b>
  k
</b>
```
## Change
```
INSERT: .q + b
UPDATE: b::text " " => "k"
```

# Update `{"label":"b","promise":{}}`

# Update
```js
assert.equal(document.querySelector("b").textContent, "k");
```
