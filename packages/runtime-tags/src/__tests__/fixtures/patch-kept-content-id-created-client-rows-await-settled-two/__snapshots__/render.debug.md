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
INSERT: h1 + button
INSERT: button + section
INSERT: section:nth-of-type(1) > :is(#sM_.#childScope/0@0[0].#childScope/0@0.#text/0@0.uid, label)
INSERT: section:nth-of-type(1) + section
INSERT: section:nth-of-type(2) > :is(#sM_.#childScope/0@0[1].#childScope/0@0.#text/0@0.uid, label)
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
