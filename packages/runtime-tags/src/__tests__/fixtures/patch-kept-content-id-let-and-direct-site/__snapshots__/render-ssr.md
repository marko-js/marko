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
assert.equal(document.querySelectorAll("label").length, ids.size);
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
INSERT: label:nth-of-type(2) + button
UPDATE: label:nth-of-type(1)::text "a" => "b"
UPDATE: label:nth-of-type(2)::text "a" => "b"
INSERT: button:nth-of-type(2) + :is(#sM_2UUA, label)
UPDATE: #sM_2UUA[id] null => "sM_2UUA"
UPDATE: label:nth-of-type(3)[for] null => "sM_2UUA"
INSERT: label:nth-of-type(3) + :is(#sM_2UVA, label)
UPDATE: #sM_2UVA[id] null => "sM_2UVA"
UPDATE: label:nth-of-type(4)[for] null => "sM_2UVA"
UPDATE: label:nth-of-type(3)::text " " => "b"
UPDATE: label:nth-of-type(4)::text " " => "b"
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
  id="sM_1UUA"
/>
<label
  for="sM_1UUA"
>
  c
</label>
<input
  id="sM_1UVA"
/>
<label
  for="sM_1UVA"
>
  c
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
  c
</label>
<input
  id="sM_2UVA"
/>
<label
  for="sM_2UVA"
>
  c
</label>
<button>
  clear
</button>
<input
  id="sM_3UUA"
/>
<label
  for="sM_3UUA"
>
  c
</label>
<input
  id="sM_3UVA"
/>
<label
  for="sM_3UVA"
>
  c
</label>
```
## Change
```
INSERT: label:nth-of-type(4) + button
UPDATE: label:nth-of-type(1)::text "b" => "c"
UPDATE: label:nth-of-type(2)::text "b" => "c"
UPDATE: label:nth-of-type(3)::text "b" => "c"
UPDATE: label:nth-of-type(4)::text "b" => "c"
INSERT: button:nth-of-type(3) + :is(#sM_3UUA, label)
UPDATE: #sM_3UUA[id] null => "sM_3UUA"
UPDATE: label:nth-of-type(5)[for] null => "sM_3UUA"
INSERT: label:nth-of-type(5) + :is(#sM_3UVA, label)
UPDATE: #sM_3UVA[id] null => "sM_3UVA"
UPDATE: label:nth-of-type(6)[for] null => "sM_3UVA"
UPDATE: label:nth-of-type(5)::text " " => "c"
UPDATE: label:nth-of-type(6)::text " " => "c"
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
