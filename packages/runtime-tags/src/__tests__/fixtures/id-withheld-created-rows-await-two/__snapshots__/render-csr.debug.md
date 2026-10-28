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
INSERT: button
INSERT: button + section
INSERT: section:nth-of-type(1) > :is(#cM_0, label)
INSERT: section:nth-of-type(1) + section
INSERT: section:nth-of-type(2) > :is(#cM_1, label)
UPDATE: section:nth-of-type(1) > label::text " " => "b"
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
    id="cM_0"
  />
  <label
    for="cM_0"
  >
    c
  </label>
</section>
<section>
  <input
    id="cM_1"
  />
  <label
    for="cM_1"
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
