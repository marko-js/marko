# Render `{"label":"a"}`
```html
<button>
  x
</button>
<section>
  <input
    id="sM_UUA"
  />
  <label
    for="sM_UUA"
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

# Update `{"label":"b"}`
```html
<button>
  x
</button>
<section>
  <input
    id="sM_UUA"
  />
  <label
    for="sM_UUA"
  >
    b
  </label>
</section>
```
## Change
```
UPDATE: section > label::text "a" => "b"
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
