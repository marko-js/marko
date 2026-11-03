# Render `{"rows":[{"id":1}]}`
```html
<input
  id="sM_1"
/>
<label
  for="sM_1"
>
  own
</label>
<button>
  clear
</button>
<input
  id="sM_2"
/>
<label
  for="sM_2"
>
  1
</label>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
for (const label of document.querySelectorAll("label")) {
  assert(ids.has(label.htmlFor), "unmatched label " + label.htmlFor);
}
assert.equal(ids.size, document.querySelectorAll("input").length);
}
```
