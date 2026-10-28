# Render `{"label":"a","rows":[{"id":1}]}`
```html
<button>
  clear
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
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
}
```

# Update `{"label":"b","rows":[{"id":1},{"id":2}]}`
```html
<button>
  clear
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
  clear
</button>
<input
  id="sM_2UUA"
/>
<label
  for="sM_2UUA"
>
  b
</label>
<input
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
