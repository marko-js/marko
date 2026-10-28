# Render `{"label":"a"}`
```html
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
    a
  </label>
</section>
<section>
  <input
    id="sM_.#childScope/0@0[1].#childScope/0@0.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0[1].#childScope/0@0.#text/0@0.uid"
  >
    a
  </label>
</section>
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

# Update `{"label":"b"}`
```html
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
    b
  </label>
</section>
<section>
  <input
    id="sM_.#childScope/0@0[1].#childScope/0@0.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0[1].#childScope/0@0.#text/0@0.uid"
  >
    b
  </label>
</section>
```
## Change
```
UPDATE: section:nth-of-type(1) > label::text "a" => "b"
UPDATE: section:nth-of-type(2) > label::text "a" => "b"
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
