# Render `{"label":"a","rows":[{"id":1}]}`
```html
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
  a
</label>
<input
  data-self="cM_1"
  id="cM_1"
/>
<label
  for="cM_1"
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
<button>
  clear
</button>
<input
  data-self="cM_2"
  id="cM_2"
/>
<label
  for="cM_2"
>
  b
</label>
<input
  data-self="cM_3"
  id="cM_3"
/>
<label
  for="cM_3"
>
  b
</label>
```
## Change
```
INSERT: label:nth-of-type(2) + :is(button, #cM_2, label, #cM_3, label)
UPDATE: label:nth-of-type(1)::text "a" => "b"
UPDATE: label:nth-of-type(2)::text "a" => "b"
UPDATE: label:nth-of-type(3)::text " " => "b"
UPDATE: label:nth-of-type(4)::text " " => "b"
UPDATE: #cM_2[data-self] null => "cM_2"
UPDATE: #cM_3[data-self] null => "cM_3"
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
