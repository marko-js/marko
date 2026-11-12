# Render `{"show":false,"label":"a","p":{}}`

# Update `{"show":true,"label":"b","p":{"value":"y"}}`
```html
<section>
  <button>
    clear
  </button>
  <input
    id="sM_UUA"
  />
  <label
    for="sM_UUA"
  >
    yb
  </label>
  <input
    id="sM_UVA"
  />
  <label
    for="sM_UVA"
  >
    yb
  </label>
</section>
```
## Change
```
INSERT: section
INSERT: section > button + :is(#sM_UUA, label)
INSERT: section > label:nth-of-type(1) + :is(#sM_UVA, label)
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

# Update `{"show":true,"label":"c","p":{"value":"z"}}`
```html
<section>
  <button>
    clear
  </button>
  <input
    id="sM_UUA"
  />
  <label
    for="sM_UUA"
  >
    zc
  </label>
  <input
    id="sM_UVA"
  />
  <label
    for="sM_UVA"
  >
    zc
  </label>
</section>
```
## Change
```
REMOVE: section > button + #sM_UUA
REMOVE: #sM_UUA + label
REMOVE: section > label:nth-of-type(1) + #sM_UVA
REMOVE: #sM_UVA + label
INSERT: section > button + :is(#sM_UUA, label)
INSERT: section > label:nth-of-type(1) + :is(#sM_UVA, label)
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
