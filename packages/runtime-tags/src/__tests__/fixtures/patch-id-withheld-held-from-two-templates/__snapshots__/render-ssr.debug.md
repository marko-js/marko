# Render `{"rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<p>
  <input
    id="sM_[1].#childScope/0@0.#childScope/0@0.#childScope/1@0.#text/0@0.rid"
  />
  <label
    for="sM_[1].#childScope/0@0.#childScope/0@0.#childScope/1@0.#text/0@0.rid"
  >
    relay
  </label>
</p>
<p>
  <input
    id="sM_[1].#childScope/0@0.#childScope/0@0.#childScope/2@1.#text/0@0.uid"
  />
  <label
    for="sM_[1].#childScope/0@0.#childScope/0@0.#childScope/2@1.#text/0@0.uid"
  >
    p 1
  </label>
</p>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate id: " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
}
```

# Update `{"rows":[{"id":1},{"id":2}]}`
```html
<button>
  clear
</button>
<p>
  <input
    id="sM_[1].#childScope/0@0.#childScope/0@0.#childScope/1@0.#text/0@0.rid"
  />
  <label
    for="sM_[1].#childScope/0@0.#childScope/0@0.#childScope/1@0.#text/0@0.rid"
  >
    relay
  </label>
</p>
<p>
  <input
    id="sM_[1].#childScope/0@0.#childScope/0@0.#childScope/2@1.#text/0@0.uid"
  />
  <label
    for="sM_[1].#childScope/0@0.#childScope/0@0.#childScope/2@1.#text/0@0.uid"
  >
    p 1
  </label>
</p>
<button>
  clear
</button>
<p>
  <input
    id="sM_[2].#childScope/0@0.#childScope/0@0.#childScope/1@0.#text/0@0.rid"
  />
  <label
    for="sM_[2].#childScope/0@0.#childScope/0@0.#childScope/1@0.#text/0@0.rid"
  >
    relay
  </label>
</p>
<p>
  <input
    id="sM_[2].#childScope/0@0.#childScope/0@0.#childScope/2@1.#text/0@0.uid"
  />
  <label
    for="sM_[2].#childScope/0@0.#childScope/0@0.#childScope/2@1.#text/0@0.uid"
  >
    p 2
  </label>
</p>
```
## Change
```
INSERT: p:nth-of-type(2) + :is(button, p, p)
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate id: " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
}
```
