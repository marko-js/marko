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
