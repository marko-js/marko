# Render `{"show":false,"label":"a"}`
```html
<h1>
  Rows that wait on a settled promise
</h1>
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
<h1>
  Rows that wait on a settled promise
</h1>
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
INSERT: h1 + button
INSERT: button + section
INSERT: section:nth-of-type(1) > :is(#sM_U0UUA, label)
INSERT: section:nth-of-type(1) + section
INSERT: section:nth-of-type(2) > :is(#sM_U1UUA, label)
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
