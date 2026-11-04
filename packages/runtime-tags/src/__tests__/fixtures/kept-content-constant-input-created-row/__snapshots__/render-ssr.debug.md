# Render `{"label":"a","rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<span>
  new
</span>
<em>
  a
</em>
<span>
  new
</span>
<em>
  a
</em>
```

# Update
```js
for (const span of document.querySelectorAll("span")) {
assert.equal(span.textContent, "new");
}
```
