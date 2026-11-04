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
```
## Change
```
INSERT: .swap + p
UPDATE: p::text " " => "a"
INSERT: #document > html > head > title
INSERT: #document > html > head > title::text("a")
```

# Update
```js
assert.equal(document.title, text);
```

# Update `{"label":"b","promise":{}}`
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
REMOVE: #document > html > head > title::text("a")
INSERT: #document > html > head > title::text("b")
```

# Update
```js
assert.equal(document.title, text);
```
