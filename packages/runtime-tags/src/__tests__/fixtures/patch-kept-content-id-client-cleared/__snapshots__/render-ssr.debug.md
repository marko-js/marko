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

# Update
```js
d.querySelector("button").click();
```
```html
<button>
  clear
</button>
```
## Change
```
REMOVE: button + #sM_[1].#childScope/0@0.#text/1@0.uid
REMOVE: button + label
REMOVE: button + #sM_[1].#childScope/0@0.#text/2@1.uid
REMOVE: button + label
```

# Update `{"label":"b","rows":[{"id":1},{"id":2}]}`
```html
<button>
  clear
</button>
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
INSERT: button:nth-of-type(1) + button
INSERT: button:nth-of-type(2) + :is(#sM_[2].#childScope/0@0.#text/1@0.uid, label)
INSERT: label:nth-of-type(1) + :is(#sM_[2].#childScope/0@0.#text/2@1.uid, label)
UPDATE: #sM_[2].#childScope/0@0.#text/1@0.uid[id] null => "sM_[2].#childScope/0@0.#text/1@0.uid"
UPDATE: label:nth-of-type(1)[for] null => "sM_[2].#childScope/0@0.#text/1@0.uid"
UPDATE: #sM_[2].#childScope/0@0.#text/2@1.uid[id] null => "sM_[2].#childScope/0@0.#text/2@1.uid"
UPDATE: label:nth-of-type(2)[for] null => "sM_[2].#childScope/0@0.#text/2@1.uid"
UPDATE: label:nth-of-type(1)::text " " => "b"
UPDATE: label:nth-of-type(2)::text " " => "b"
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
