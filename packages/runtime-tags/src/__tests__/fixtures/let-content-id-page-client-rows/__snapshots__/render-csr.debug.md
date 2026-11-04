# Render `{"label":"a"}`
```html
<button>
  x
</button>
<section>
  <input
    id="cM_0"
  />
  <label
    for="cM_0"
  >
    a
  </label>
</section>
<section>
  <input
    id="cM_1"
  />
  <label
    for="cM_1"
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
    id="cM_0"
  />
  <label
    for="cM_0"
  >
    b
  </label>
</section>
<section>
  <input
    id="cM_1"
  />
  <label
    for="cM_1"
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
