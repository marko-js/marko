# Render `{"label":"a"}`
```html
<button>
  x
</button>
<section>
  <input
    id="sM_1"
  />
  <label
    for="sM_1"
  >
    a
  </label>
</section>
<section>
  <input
    id="sM_2"
  />
  <label
    for="sM_2"
  >
    a
  </label>
</section>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
}
```
