# Render `{"show":false,"label":"a","p":{}}`

# Update `{"show":true,"label":"b","p":{"value":"y"}}`
```html
<section>
  <button>
    clear
  </button>
  <input
    id="cM_0"
  />
  <label
    for="cM_0"
  >
    yb
  </label>
  <input
    id="cM_1"
  />
  <label
    for="cM_1"
  >
    yb
  </label>
</section>
```
## Change
```
INSERT: section
INSERT: section > button + :is(#cM_0, label)
UPDATE: section > label:nth-of-type(1)::text@0 "" => "y"
UPDATE: section > label:nth-of-type(1)::text@1 "" => "b"
INSERT: section > label:nth-of-type(1) + :is(#cM_1, label)
UPDATE: section > label:nth-of-type(2)::text@0 "" => "y"
UPDATE: section > label:nth-of-type(2)::text@1 "" => "b"
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
    id="cM_0"
  />
  <label
    for="cM_0"
  >
    zc
  </label>
  <input
    id="cM_1"
  />
  <label
    for="cM_1"
  >
    zc
  </label>
</section>
```
## Change
```
REMOVE: section > button + #cM_0
REMOVE: #cM_0 + label
REMOVE: section > label:nth-of-type(1) + #cM_1
REMOVE: #cM_1 + label
INSERT: section > button + :is(#cM_0, label)
INSERT: section > label:nth-of-type(1) + :is(#cM_1, label)
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
