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
INSERT: button, section, section
UPDATE: #sM_U0UUA[id] null => "sM_U0UUA"
UPDATE: section:nth-of-type(1) > label[for] null => "sM_U0UUA"
UPDATE: section:nth-of-type(1) > label::text " " => "b"
UPDATE: #sM_U1UUA[id] null => "sM_U1UUA"
UPDATE: section:nth-of-type(2) > label[for] null => "sM_U1UUA"
UPDATE: section:nth-of-type(2) > label::text " " => "b"
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
    id="sM_U0UUA"
  />
  <label
    for="sM_U0UUA"
  >
    c
  </label>
</section>
<section>
  <input
    id="sM_U1UUA"
  />
  <label
    for="sM_U1UUA"
  >
    c
  </label>
</section>
```
## Change
```
UPDATE: section:nth-of-type(1) > label::text "b" => "c"
UPDATE: section:nth-of-type(2) > label::text "b" => "c"
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
