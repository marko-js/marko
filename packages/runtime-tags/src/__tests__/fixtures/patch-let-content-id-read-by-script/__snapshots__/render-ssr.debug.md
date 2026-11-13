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
  data-self="cM_0"
  id="cM_0"
/>
<label
  for="cM_0"
>
  b
</label>
<input
  data-self="cM_1"
  id="cM_1"
/>
<label
  for="cM_1"
>
  b
</label>
```
## Change
```
INSERT: label:nth-of-type(2) + button
INSERT: button:nth-of-type(2) + :is(#cM_0, label)
INSERT: label:nth-of-type(3) + :is(#cM_1, label)
UPDATE: label:nth-of-type(1)::text "a" => "b"
UPDATE: label:nth-of-type(2)::text "a" => "b"
UPDATE: label:nth-of-type(3)::text " " => "b"
UPDATE: label:nth-of-type(4)::text " " => "b"
UPDATE: #cM_0[data-self] null => "cM_0"
UPDATE: #cM_1[data-self] null => "cM_1"
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
