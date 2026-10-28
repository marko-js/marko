# Render `{"label":"a","rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<input
  id="sM_[1].#childScope/0@0.#childScope/0@0.#text/1@0.uid"
/>
<label
  for="sM_[1].#childScope/0@0.#childScope/0@0.#text/1@0.uid"
>
  a
</label>
<input
  id="sM_[1].#childScope/0@0.#childScope/0@0.#text/2@1.uid"
/>
<label
  for="sM_[1].#childScope/0@0.#childScope/0@0.#text/2@1.uid"
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
assert.equal(document.querySelectorAll("label").length, ids.size);
}
```

# Update `{"label":"b","rows":[{"id":1},{"id":2}]}`
```html
<button>
  clear
</button>
<input
  id="sM_[1].#childScope/0@0.#childScope/0@0.#text/1@0.uid"
/>
<label
  for="sM_[1].#childScope/0@0.#childScope/0@0.#text/1@0.uid"
>
  b
</label>
<input
  id="sM_[1].#childScope/0@0.#childScope/0@0.#text/2@1.uid"
/>
<label
  for="sM_[1].#childScope/0@0.#childScope/0@0.#text/2@1.uid"
>
  b
</label>
<button>
  clear
</button>
<input
  id="sM_[2].#childScope/0@0.#childScope/0@0.#text/1@0.uid"
/>
<label
  for="sM_[2].#childScope/0@0.#childScope/0@0.#text/1@0.uid"
>
  b
</label>
<input
  id="sM_[2].#childScope/0@0.#childScope/0@0.#text/2@1.uid"
/>
<label
  for="sM_[2].#childScope/0@0.#childScope/0@0.#text/2@1.uid"
>
  b
</label>
```
## Change
```
UPDATE: label:nth-of-type(1)::text "a" => "b"
UPDATE: label:nth-of-type(2)::text "a" => "b"
INSERT: label:nth-of-type(2) + :is(button, #sM_[2].#childScope/0@0.#childScope/0@0.#text/1@0.uid, label, #sM_[2].#childScope/0@0.#childScope/0@0.#text/2@1.uid, label)
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
assert.equal(document.querySelectorAll("label").length, ids.size);
}
```

# Update `{"label":"c","rows":[{"id":1},{"id":2},{"id":3}]}`
```html
<button>
  clear
</button>
<input
  id="sM_[1].#childScope/0@0.#childScope/0@0.#text/1@0.uid"
/>
<label
  for="sM_[1].#childScope/0@0.#childScope/0@0.#text/1@0.uid"
>
  c
</label>
<input
  id="sM_[1].#childScope/0@0.#childScope/0@0.#text/2@1.uid"
/>
<label
  for="sM_[1].#childScope/0@0.#childScope/0@0.#text/2@1.uid"
>
  c
</label>
<button>
  clear
</button>
<input
  id="sM_[2].#childScope/0@0.#childScope/0@0.#text/1@0.uid"
/>
<label
  for="sM_[2].#childScope/0@0.#childScope/0@0.#text/1@0.uid"
>
  c
</label>
<input
  id="sM_[2].#childScope/0@0.#childScope/0@0.#text/2@1.uid"
/>
<label
  for="sM_[2].#childScope/0@0.#childScope/0@0.#text/2@1.uid"
>
  c
</label>
<button>
  clear
</button>
<input
  id="sM_[3].#childScope/0@0.#childScope/0@0.#text/1@0.uid"
/>
<label
  for="sM_[3].#childScope/0@0.#childScope/0@0.#text/1@0.uid"
>
  c
</label>
<input
  id="sM_[3].#childScope/0@0.#childScope/0@0.#text/2@1.uid"
/>
<label
  for="sM_[3].#childScope/0@0.#childScope/0@0.#text/2@1.uid"
>
  c
</label>
```
## Change
```
UPDATE: label:nth-of-type(1)::text "b" => "c"
UPDATE: label:nth-of-type(2)::text "b" => "c"
UPDATE: label:nth-of-type(3)::text "b" => "c"
UPDATE: label:nth-of-type(4)::text "b" => "c"
INSERT: label:nth-of-type(4) + :is(button, #sM_[3].#childScope/0@0.#childScope/0@0.#text/1@0.uid, label, #sM_[3].#childScope/0@0.#childScope/0@0.#text/2@1.uid, label)
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
assert.equal(document.querySelectorAll("label").length, ids.size);
}
```
