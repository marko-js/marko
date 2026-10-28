# Render `{"show":false,"label":"a"}`
```html
<button>
  x
</button>
<section />
<section />
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

# Update `{"show":true,"label":"b"}`
```html
<button>
  x
</button>
<section>
  <input
    id="sM_UTha3A"
  />
  <label
    for="sM_UTha3A"
  >
    b
  </label>
</section>
<section />
```
## Change
```
INSERT: section:nth-of-type(1) > :is(#sM_UTha3A, label)
```

## Patch rejected (navigate)

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
    id="sM_UTha3A"
  />
  <label
    for="sM_UTha3A"
  >
    c
  </label>
</section>
<section />
```
## Change
```
UPDATE: section:nth-of-type(1) > label::text "b" => "c"
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
