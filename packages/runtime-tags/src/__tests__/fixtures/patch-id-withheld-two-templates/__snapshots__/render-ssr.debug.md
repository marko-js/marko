# Render `{"rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<input
  id="sM_[1].#childScope/0@0.#childScope/0@0.#text/1@0.rid"
/>
<label
  for="sM_[1].#childScope/0@0.#childScope/0@0.#text/1@0.rid"
>
  relay
</label>
<input
  id="sM_[1].#childScope/0@0.#childScope/0@0.#text/2@1.uid"
/>
<label
  for="sM_[1].#childScope/0@0.#childScope/0@0.#text/2@1.uid"
>
  p 1
</label>
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
<input
  id="sM_[1].#childScope/0@0.#childScope/0@0.#text/1@0.rid"
/>
<label
  for="sM_[1].#childScope/0@0.#childScope/0@0.#text/1@0.rid"
>
  relay
</label>
<input
  id="sM_[1].#childScope/0@0.#childScope/0@0.#text/2@1.uid"
/>
<label
  for="sM_[1].#childScope/0@0.#childScope/0@0.#text/2@1.uid"
>
  p 1
</label>
<button>
  clear
</button>
<input
  id="sM_[2].#childScope/0@0.#childScope/0@0.#text/1@0.rid"
/>
<label
  for="sM_[2].#childScope/0@0.#childScope/0@0.#text/1@0.rid"
>
  relay
</label>
<input
  id="sM_[2].#childScope/0@0.#childScope/0@0.#text/2@1.uid"
/>
<label
  for="sM_[2].#childScope/0@0.#childScope/0@0.#text/2@1.uid"
>
  p 2
</label>
```
## Change
```
INSERT: button:nth-of-type(1) + :is(#sM_[1].#childScope/0@0.#childScope/0@0.#text/1@0.rid, label)
REMOVE: label:nth-of-type(1) + #sM_[1].#childScope/0@0.#childScope/0@0.#text/1@0.rid
REMOVE: label:nth-of-type(1) + label
UPDATE: #sM_[1].#childScope/0@0.#childScope/0@0.#text/1@0.rid[id] null => "sM_[1].#childScope/0@0.#childScope/0@0.#text/1@0.rid"
UPDATE: label:nth-of-type(1)[for] null => "sM_[1].#childScope/0@0.#childScope/0@0.#text/1@0.rid"
INSERT: label:nth-of-type(2) + :is(button, #sM_[2].#childScope/0@0.#childScope/0@0.#text/1@0.rid, label, #sM_[2].#childScope/0@0.#childScope/0@0.#text/2@1.uid, label)
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
