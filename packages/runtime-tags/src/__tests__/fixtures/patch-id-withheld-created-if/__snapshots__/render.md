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
    id="sM_UUUA"
  />
  <label
    for="sM_UUUA"
  >
    b
  </label>
</section>
```
## Change
```
INSERT: button, section
INSERT: section > :is(#sM_UUUA, label)
UPDATE: #sM_UUUA[id] null => "sM_UUUA"
UPDATE: section > label[for] null => "sM_UUUA"
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
    id="sM_UUUA"
  />
  <label
    for="sM_UUUA"
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
