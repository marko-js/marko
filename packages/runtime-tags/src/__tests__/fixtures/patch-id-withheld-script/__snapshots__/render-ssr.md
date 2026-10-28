# Render `{"label":"a","rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<input
  data-self="sM_1UUA"
  id="sM_1UUA"
/>
<label
  for="sM_1UUA"
>
  a
</label>
<input
  data-self="sM_1UVA"
  id="sM_1UVA"
/>
<label
  for="sM_1UVA"
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
  data-self="sM_1UUA"
  id="sM_1UUA"
/>
<label
  for="sM_1UUA"
>
  b
</label>
<input
  data-self="sM_1UVA"
  id="sM_1UVA"
/>
<label
  for="sM_1UVA"
>
  b
</label>
<button>
  clear
</button>
<input
  data-self="sM_2UUA"
  id="sM_2UUA"
/>
<label
  for="sM_2UUA"
>
  b
</label>
<input
  data-self="sM_2UVA"
  id="sM_2UVA"
/>
<label
  for="sM_2UVA"
>
  b
</label>
```
## Change
```
UPDATE: label:nth-of-type(1)::text "a" => "b"
UPDATE: label:nth-of-type(2)::text "a" => "b"
INSERT: label:nth-of-type(2) + :is(button, #sM_2UUA, label, #sM_2UVA, label)
UPDATE: #sM_2UUA[data-self] null => "sM_2UUA"
UPDATE: #sM_2UVA[data-self] null => "sM_2UVA"
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
