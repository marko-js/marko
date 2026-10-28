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
INSERT: button, section, section
UPDATE: #sM_.#childScope/0@0[0].#childScope/0@0.#text/0@0.uid[id] null => "sM_.#childScope/0@0[0].#childScope/0@0.#text/0@0.uid"
UPDATE: section:nth-of-type(1) > label[for] null => "sM_.#childScope/0@0[0].#childScope/0@0.#text/0@0.uid"
UPDATE: section:nth-of-type(1) > label::text " " => "b"
UPDATE: #sM_.#childScope/0@0[1].#childScope/0@0.#text/0@0.uid[id] null => "sM_.#childScope/0@0[1].#childScope/0@0.#text/0@0.uid"
UPDATE: section:nth-of-type(2) > label[for] null => "sM_.#childScope/0@0[1].#childScope/0@0.#text/0@0.uid"
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
    id="sM_.#childScope/0@0[0].#childScope/0@0.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0[0].#childScope/0@0.#text/0@0.uid"
  >
    c
  </label>
</section>
<section>
  <input
    id="sM_.#childScope/0@0[1].#childScope/0@0.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0[1].#childScope/0@0.#text/0@0.uid"
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
