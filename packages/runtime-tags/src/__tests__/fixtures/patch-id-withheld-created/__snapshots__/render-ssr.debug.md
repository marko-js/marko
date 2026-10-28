# Render `{"label":"a","rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<input
  id="sM_[1].#childScope/0@0.#text/1@0.uid"
/>
<label
  for="sM_[1].#childScope/0@0.#text/1@0.uid"
>
  a
</label>
<input
  id="sM_[1].#childScope/0@0.#text/2@1.uid"
/>
<label
  for="sM_[1].#childScope/0@0.#text/2@1.uid"
>
  a
</label>
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

# Update `{"label":"b","rows":[{"id":1},{"id":2}]}`
```html
<button>
  clear
</button>
<input
  id="sM_[1].#childScope/0@0.#text/1@0.uid"
/>
<label
  for="sM_[1].#childScope/0@0.#text/1@0.uid"
>
  b
</label>
<input
  id="sM_[1].#childScope/0@0.#text/2@1.uid"
/>
<label
  for="sM_[1].#childScope/0@0.#text/2@1.uid"
>
  b
</label>
<button>
  clear
</button>
<input
  id="sM_[2].#childScope/0@0.#text/1@0.uid"
/>
<label
  for="sM_[2].#childScope/0@0.#text/1@0.uid"
>
  b
</label>
<input
  id="sM_[2].#childScope/0@0.#text/2@1.uid"
/>
<label
  for="sM_[2].#childScope/0@0.#text/2@1.uid"
>
  b
</label>
```
## Change
```
UPDATE: label:nth-of-type(1)::text "a" => "b"
UPDATE: label:nth-of-type(2)::text "a" => "b"
INSERT: label:nth-of-type(2) + :is(button, #sM_[2].#childScope/0@0.#text/1@0.uid, label, #sM_[2].#childScope/0@0.#text/2@1.uid, label)
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
