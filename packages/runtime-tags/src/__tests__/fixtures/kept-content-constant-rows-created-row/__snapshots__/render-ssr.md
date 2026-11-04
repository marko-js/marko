# Render `{"label":"a","rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<b>
  a
</b>
<b>
  a
</b>
<b>
  a
</b>
<b>
  a
</b>
```

# Update
```js
const items = document.querySelectorAll("b");
assert.equal(items.length, rows, "rows");
for (const item of items) assert.equal(item.textContent, label);
```
