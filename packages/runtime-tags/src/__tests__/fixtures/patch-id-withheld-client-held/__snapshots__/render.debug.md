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
  clear
</button>
<p>
  <input
    id="sM_.#childScope/0@0.#childScope/1@0.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0.#childScope/1@0.#text/0@0.uid"
  >
    b
  </label>
</p>
<p>
  <input
    id="sM_.#childScope/0@0.#childScope/2@1.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0.#childScope/2@1.#text/0@0.uid"
  >
    b
  </label>
</p>
```
## Change
```
INSERT: button, p, p
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
  clear
</button>
<p>
  <input
    id="sM_.#childScope/0@0.#childScope/1@0.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0.#childScope/1@0.#text/0@0.uid"
  >
    c
  </label>
</p>
<p>
  <input
    id="sM_.#childScope/0@0.#childScope/2@1.#text/0@0.uid"
  />
  <label
    for="sM_.#childScope/0@0.#childScope/2@1.#text/0@0.uid"
  >
    c
  </label>
</p>
```
## Change
```
UPDATE: p:nth-of-type(1) > label::text "b" => "c"
UPDATE: p:nth-of-type(2) > label::text "b" => "c"
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
  clear
</button>
<p />
<p />
```
## Change
```
REMOVE: p:nth-of-type(1) > #sM_.#childScope/0@0.#childScope/1@0.#text/0@0.uid
REMOVE: p:nth-of-type(1) > label
REMOVE: p:nth-of-type(2) > #sM_.#childScope/0@0.#childScope/2@1.#text/0@0.uid
REMOVE: p:nth-of-type(2) > label
```

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
