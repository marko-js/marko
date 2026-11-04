# Render `{"show":false,"label":"a","promise":{"value":"x"}}`
```html
<h1>
  A value the client holds
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
  A value the client holds
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
```html
<h1>
  A value the client holds
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
    b
  </label>
</section>
```
## Change
```
INSERT: button + section
INSERT: section > :is(#cM_0, label)
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

# Update `{"show":false,"label":"c","promise":"z"}`
```html
<h1>
  A value the client holds
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
  A value the client holds
</h1>
<button>
  x
</button>
<section>
  <input
    id="cM_1"
  />
  <label
    for="cM_1"
  >
    d
  </label>
</section>
```
## Change
```
INSERT: h1 + button
INSERT: button + section
INSERT: section > :is(#cM_1, label)
UPDATE: section > label::text " " => "d"
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
  A value the client holds
</h1>
<button>
  x
</button>
<section>
  <input
    id="cM_1"
  />
  <label
    for="cM_1"
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
  A value the client holds
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
  A value the client holds
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
```html
<h1>
  A value the client holds
</h1>
<button>
  x
</button>
<section>
  <input
    id="cM_2"
  />
  <label
    for="cM_2"
  >
    g
  </label>
</section>
```
## Change
```
INSERT: button + section
INSERT: section > :is(#cM_2, label)
UPDATE: section > label::text " " => "g"
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
