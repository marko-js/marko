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
    id="sM_.#childScope/0@0.#childScope/0@0.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0.#childScope/0@0.#text/0@0.uid"
  >
    b
  </label>
</section>
```
## Change
```
INSERT: button
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

# Update `{"show":true,"label":"c"}`
```html
<button>
  x
</button>
<section>
  <input
    id="sM_.#childScope/0@0.#childScope/0@0.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0.#childScope/0@0.#text/0@0.uid"
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
