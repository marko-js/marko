# Render `{"label":"a","rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<input
  data-self="sM_[1].#childScope/0@0.#text/1@0.uid"
  id="sM_[1].#childScope/0@0.#text/1@0.uid"
/>
<label
  for="sM_[1].#childScope/0@0.#text/1@0.uid"
>
  a
</label>
<input
  data-self="sM_[1].#childScope/0@0.#text/2@1.uid"
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
for (const label of document.querySelectorAll("label")) {
  assert(ids.has(label.htmlFor), "unmatched label " + label.htmlFor);
}
for (const el of document.querySelectorAll("[data-self]")) {
  assert.equal(
el.getAttribute("data-self"),
el.id,
"script read of " + el.id,
  );
}
}
```

# Update `{"label":"b","rows":[{"id":1},{"id":2}]}`
```html
<button>
  clear
</button>
<input
  data-self="sM_[1].#childScope/0@0.#text/1@0.uid"
  id="sM_[1].#childScope/0@0.#text/1@0.uid"
/>
<label
  for="sM_[1].#childScope/0@0.#text/1@0.uid"
>
  b
</label>
<input
  data-self="sM_[1].#childScope/0@0.#text/2@1.uid"
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
  data-self="sM_[2].#childScope/0@0.#text/1@0.uid"
  id="sM_[2].#childScope/0@0.#text/1@0.uid"
/>
<label
  for="sM_[2].#childScope/0@0.#text/1@0.uid"
>
  b
</label>
<input
  data-self="sM_[2].#childScope/0@0.#text/2@1.uid"
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
UPDATE: #sM_[2].#childScope/0@0.#text/1@0.uid[data-self] null => "sM_[2].#childScope/0@0.#text/1@0.uid"
UPDATE: #sM_[2].#childScope/0@0.#text/2@1.uid[data-self] null => "sM_[2].#childScope/0@0.#text/2@1.uid"
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
for (const label of document.querySelectorAll("label")) {
  assert(ids.has(label.htmlFor), "unmatched label " + label.htmlFor);
}
for (const el of document.querySelectorAll("[data-self]")) {
  assert.equal(
el.getAttribute("data-self"),
el.id,
"script read of " + el.id,
  );
}
}
```
