# Render `{"show":false,"label":"a","promise":{"value":"x"}}`
```html
<h1>
  Rows that wait on a value
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

# Update `{"show":true,"label":"b","promise":{"value":"y"}}`
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
assert(document.querySelector("button"), "row's owner");
assert.equal(document.querySelector("input"), null);
```

# Update `{"show":true,"label":"b","promise":{"value":"y"}}`
```html
<h1>
  Rows that wait on a value
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
```
## Change
```
INSERT: button + section
INSERT: section > :is(#sM_U0UUA, label)
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

# Update `{"show":false,"label":"c","promise":"z"}`
```html
<h1>
  Rows that wait on a value
</h1>
```
## Change
```
REMOVE: h1 + button
REMOVE: h1 + section
```

# Update `{"show":true,"label":"d","promise":"z"}`
```html
<h1>
  Rows that wait on a value
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
    d
  </label>
</section>
```
## Change
```
INSERT: h1 + button
INSERT: button + section
INSERT: section > :is(#sM_U0UUA, label)
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

# Update `{"show":true,"label":"e","promise":{"value":"v"}}`
```html
<h1>
  Rows that wait on a value
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
    e
  </label>
</section>
```
## Change
```
UPDATE: section > label::text "d" => "e"
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

# Update `{"show":false,"label":"f","promise":"z"}`
```html
<h1>
  Rows that wait on a value
</h1>
```
## Change
```
REMOVE: h1 + button
REMOVE: h1 + section
```

# Update `{"show":true,"label":"g","promise":{"value":"w"}}`
```html
<h1>
  Rows that wait on a value
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
    g
  </label>
</section>
```
## Change
```
INSERT: h1 + button
INSERT: button + section
INSERT: section > :is(#sM_U0UUA, label)
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
