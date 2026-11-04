# Render `{"show":false,"label":"a"}`
```html
<button>
  x
</button>
<section />
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
INSERT: section > #sM_.#childScope/0@0.#childScope/0@0.#text/0@0.uid
INSERT: #sM_.#childScope/0@0.#childScope/0@0.#text/0@0.uid + label
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

# Update
```js
d.querySelector("button")?.click();
```
```html
<button>
  x
</button>
<p>
  none
</p>
```
## Change
```
INSERT: button + p
REMOVE: p + section
```

# Update `{"show":false,"label":"c"}`

# Update `{"show":true,"label":"d"}`

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
}
```
