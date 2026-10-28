# Render `{"label":"a"}`
```html
<button>
  x
</button>
<section>
  <input
    id="sM_U0UUA"
  />
  <label
    for="sM_U0UUA"
  >
    a
  </label>
</section>
<section>
  <input
    id="sM_U1UUA"
  />
  <label
    for="sM_U1UUA"
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
    id="sM_U0UUA"
  />
  <label
    for="sM_U0UUA"
  >
    b
  </label>
</section>
<section>
  <input
    id="sM_U1UUA"
  />
  <label
    for="sM_U1UUA"
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
