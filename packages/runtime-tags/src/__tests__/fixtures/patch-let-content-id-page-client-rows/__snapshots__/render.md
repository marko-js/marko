# Render `{"label":"a"}`
```html
<button>
  x
</button>
<section>
  <input
    id="sM_0TTA"
  />
  <label
    for="sM_0TTA"
  >
    a
  </label>
</section>
<section>
  <input
    id="sM_1TTA"
  />
  <label
    for="sM_1TTA"
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
    id="sM_0TTA"
  />
  <label
    for="sM_0TTA"
  >
    b
  </label>
</section>
<section>
  <input
    id="sM_1TTA"
  />
  <label
    for="sM_1TTA"
  >
    b
  </label>
</section>
```
## Change
```
UPDATE: section:nth-of-type(1) > label::text "a" => "b"
UPDATE: section:nth-of-type(2) > label::text "a" => "b"
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
