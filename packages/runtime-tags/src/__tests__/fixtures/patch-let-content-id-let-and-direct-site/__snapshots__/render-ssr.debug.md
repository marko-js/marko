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
assert.equal(document.querySelectorAll("label").length, ids.size);
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
INSERT: label:nth-of-type(2) + button
UPDATE: label:nth-of-type(2)::text "a" => "b"
INSERT: button:nth-of-type(2) + :is(#sM_[2].#childScope/0@0.#text/1@0.uid, label)
UPDATE: #sM_[2].#childScope/0@0.#text/1@0.uid[id] null => "sM_[2].#childScope/0@0.#text/1@0.uid"
UPDATE: label:nth-of-type(3)[for] null => "sM_[2].#childScope/0@0.#text/1@0.uid"
UPDATE: label:nth-of-type(3)::text " " => "b"
INSERT: label:nth-of-type(3) + :is(#sM_[2].#childScope/0@0.#text/2@1.uid, label)
UPDATE: #sM_[2].#childScope/0@0.#text/2@1.uid[id] null => "sM_[2].#childScope/0@0.#text/2@1.uid"
UPDATE: label:nth-of-type(4)[for] null => "sM_[2].#childScope/0@0.#text/2@1.uid"
UPDATE: label:nth-of-type(4)::text " " => "b"
UPDATE: label:nth-of-type(1)::text "a" => "b"
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
  id="sM_[1].#childScope/0@0.#text/1@0.uid"
/>
<label
  for="sM_[1].#childScope/0@0.#text/1@0.uid"
>
  c
</label>
<input
  id="sM_[1].#childScope/0@0.#text/2@1.uid"
/>
<label
  for="sM_[1].#childScope/0@0.#text/2@1.uid"
>
  c
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
  c
</label>
<input
  id="sM_[2].#childScope/0@0.#text/2@1.uid"
/>
<label
  for="sM_[2].#childScope/0@0.#text/2@1.uid"
>
  c
</label>
<button>
  clear
</button>
<input
  id="sM_[3].#childScope/0@0.#text/1@0.uid"
/>
<label
  for="sM_[3].#childScope/0@0.#text/1@0.uid"
>
  c
</label>
<input
  id="sM_[3].#childScope/0@0.#text/2@1.uid"
/>
<label
  for="sM_[3].#childScope/0@0.#text/2@1.uid"
>
  c
</label>
```
## Change
```
INSERT: label:nth-of-type(4) + button
UPDATE: label:nth-of-type(2)::text "b" => "c"
UPDATE: label:nth-of-type(4)::text "b" => "c"
INSERT: button:nth-of-type(3) + :is(#sM_[3].#childScope/0@0.#text/1@0.uid, label)
UPDATE: #sM_[3].#childScope/0@0.#text/1@0.uid[id] null => "sM_[3].#childScope/0@0.#text/1@0.uid"
UPDATE: label:nth-of-type(5)[for] null => "sM_[3].#childScope/0@0.#text/1@0.uid"
UPDATE: label:nth-of-type(5)::text " " => "c"
INSERT: label:nth-of-type(5) + :is(#sM_[3].#childScope/0@0.#text/2@1.uid, label)
UPDATE: #sM_[3].#childScope/0@0.#text/2@1.uid[id] null => "sM_[3].#childScope/0@0.#text/2@1.uid"
UPDATE: label:nth-of-type(6)[for] null => "sM_[3].#childScope/0@0.#text/2@1.uid"
UPDATE: label:nth-of-type(6)::text " " => "c"
UPDATE: label:nth-of-type(1)::text "b" => "c"
UPDATE: label:nth-of-type(3)::text "b" => "c"
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
