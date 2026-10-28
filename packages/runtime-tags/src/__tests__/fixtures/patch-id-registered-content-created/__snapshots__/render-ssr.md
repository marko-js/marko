# Render `{"label":"a","rows":[{"id":1}]}`
```html
<button>
  toggle
</button>
<input
  id="sM_1UUA"
/>
<label
  for="sM_1UUA"
>
  a
</label>
<input
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
}
```

# Update `{"label":"b","rows":[{"id":1},{"id":2}]}`
```html
<button>
  toggle
</button>
<input
  id="sM_1UUA"
/>
<label
  for="sM_1UUA"
>
  b
</label>
<input
  id="sM_1UVA"
/>
<label
  for="sM_1UVA"
>
  b
</label>
<button>
  toggle
</button>
<input
  id="cM_0"
/>
<label
  for="cM_0"
>
  b
</label>
<input
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
INSERT: label:nth-of-type(2) + :is(button, #cM_0, label, #cM_1, label)
UPDATE: label:nth-of-type(1)::text "a" => "b"
UPDATE: label:nth-of-type(2)::text "a" => "b"
UPDATE: label:nth-of-type(3)::text " " => "b"
UPDATE: label:nth-of-type(4)::text " " => "b"
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
}
```
