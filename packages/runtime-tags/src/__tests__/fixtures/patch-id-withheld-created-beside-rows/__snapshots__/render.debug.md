# Render `{"show":true,"label":"a"}`
```html
<h1>
  Kept content beside rows
</h1>
<section>
  <input
    id="sM_.#childScope/0@0.#childScope/0@0.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0.#childScope/0@0.#text/0@0.uid"
  >
    a
  </label>
</section>
<button>
  x
</button>
<section>
  <input
    id="sM_.#childScope/0@0[0].#childScope/0@1.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0[0].#childScope/0@1.#text/0@0.uid"
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

# Update `{"show":true,"label":"b"}`
```html
<h1>
  Kept content beside rows
</h1>
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
<button>
  x
</button>
<section>
  <input
    id="sM_.#childScope/0@0[0].#childScope/0@1.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0[0].#childScope/0@1.#text/0@0.uid"
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

# Update `{"show":false,"label":"c"}`
```html
<h1>
  Kept content beside rows
</h1>
```
## Change
```
REMOVE: h1 + section
REMOVE: h1 + button
REMOVE: h1 + section
```

# Update `{"show":true,"label":"d"}`
```html
<h1>
  Kept content beside rows
</h1>
<section>
  <input
    id="sM_.#childScope/0@0.#childScope/0@0.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0.#childScope/0@0.#text/0@0.uid"
  >
    d
  </label>
</section>
<button>
  x
</button>
<section>
  <input
    id="sM_.#childScope/0@0[0].#childScope/0@1.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0[0].#childScope/0@1.#text/0@0.uid"
  >
    d
  </label>
</section>
```
## Change
```
INSERT: h1 + :is(section, button, section)
UPDATE: #sM_.#childScope/0@0[0].#childScope/0@1.#text/0@0.uid[id] null => "sM_.#childScope/0@0[0].#childScope/0@1.#text/0@0.uid"
UPDATE: section:nth-of-type(2) > label[for] null => "sM_.#childScope/0@0[0].#childScope/0@1.#text/0@0.uid"
UPDATE: section:nth-of-type(2) > label::text " " => "d"
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
