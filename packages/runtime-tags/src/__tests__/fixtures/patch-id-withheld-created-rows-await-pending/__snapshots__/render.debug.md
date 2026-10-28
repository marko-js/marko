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
  <input />
  <label>
    b
  </label>
</section>
```
## Change
```
INSERT: button + section
INSERT: section > :is(input, label)
```
## Console
```
ERROR Error: Kept content renders in an `<await>` the client settles in structure a patch created: the page loads the URL as a document instead.
```

## Patch rejected (navigate)

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
    id="sM_.#childScope/0@0[0].#childScope/0@0.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0[0].#childScope/0@0.#text/0@0.uid"
  >
    d
  </label>
</section>
```
## Change
```
INSERT: h1 + button
INSERT: button + section
INSERT: section > :is(#sM_.#childScope/0@0[0].#childScope/0@0.#text/0@0.uid, label)
UPDATE: #sM_.#childScope/0@0[0].#childScope/0@0.#text/0@0.uid[id] null => "sM_.#childScope/0@0[0].#childScope/0@0.#text/0@0.uid"
UPDATE: section > label[for] null => "sM_.#childScope/0@0[0].#childScope/0@0.#text/0@0.uid"
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
    id="sM_.#childScope/0@0[0].#childScope/0@0.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0[0].#childScope/0@0.#text/0@0.uid"
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
  <input />
  <label>
    g
  </label>
</section>
```
## Change
```
INSERT: h1 + button
INSERT: button + section
INSERT: section > :is(input, label)
```
