# Render `{"show":false,"label":"a"}`

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
}
```

# Update `{"show":true,"label":"b"}`
```html
<button>
  x
</button>
<section>
  <input
    id="sM_U00UUA"
  />
  <label
    for="sM_U00UUA"
  >
    b
  </label>
</section>
```
## Change
```
INSERT: button, section
UPDATE: #sM_U00UUA[id] null => "sM_U00UUA"
UPDATE: section > label[for] null => "sM_U00UUA"
UPDATE: section > label::text " " => "b"
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

# Update `{"show":true,"label":"c"}`
```html
<button>
  x
</button>
<section>
  <input
    id="sM_U00UUA"
  />
  <label
    for="sM_U00UUA"
  >
    c
  </label>
</section>
```
## Change
```
UPDATE: section > label::text "b" => "c"
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
