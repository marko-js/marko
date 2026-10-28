# Render `{"show":false,"label":"a","promise":{"value":""}}`
```html
<h1>
  Rows that wait on a value
</h1>
```

# Update `{"show":true,"label":"b","promise":{"value":""}}`
```html
<h1>
  Rows that wait on a value
</h1>
<button>
  x
</button>
```
## Change
```
INSERT: h1 + button
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

# Update `{"show":true,"label":"c","promise":{"value":"y"}}`
```html
<h1>
  Rows that wait on a value
</h1>
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
```
## Change
```
INSERT: button + section
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
