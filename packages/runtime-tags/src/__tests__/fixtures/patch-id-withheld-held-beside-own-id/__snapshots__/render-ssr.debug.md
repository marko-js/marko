# Render `{"rows":[{"id":1}]}`
```html
<input
  id="sM_[1].#childScope/0@0.own"
/>
<label
  for="sM_[1].#childScope/0@0.own"
>
  own
</label>
<button>
  clear
</button>
<p>
  <input
    id="sM_[1].#childScope/0@0.#childScope/3@0.#text/0@0.uid"
  />
  <label
    for="sM_[1].#childScope/0@0.#childScope/3@0.#text/0@0.uid"
  >
    1
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
<input
  id="sM_[1].#childScope/0@0.own"
/>
<label
  for="sM_[1].#childScope/0@0.own"
>
  own
</label>
<button>
  clear
</button>
<p>
  <input
    id="sM_[1].#childScope/0@0.#childScope/3@0.#text/0@0.uid"
  />
  <label
    for="sM_[1].#childScope/0@0.#childScope/3@0.#text/0@0.uid"
  >
    1
  </label>
</p>
<input
  id="sM_[2].#childScope/0@0.own"
/>
<label
  for="sM_[2].#childScope/0@0.own"
>
  own
</label>
<button>
  clear
</button>
<p>
  <input
    id="sM_[2].#childScope/0@0.#childScope/3@0.#text/0@0.uid"
  />
  <label
    for="sM_[2].#childScope/0@0.#childScope/3@0.#text/0@0.uid"
  >
    2
  </label>
</p>
```
## Change
```
INSERT: p:nth-of-type(1) + :is(#sM_[2].#childScope/0@0.own, label, button, p)
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
