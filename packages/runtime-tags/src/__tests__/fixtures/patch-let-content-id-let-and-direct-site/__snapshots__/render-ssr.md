# Render `{"label":"a","rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<input
  id="sM_1TTA"
/>
<label
  for="sM_1TTA"
>
  a
</label>
<input
  id="sM_1TUA"
/>
<label
  for="sM_1TUA"
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
  id="sM_1TTA"
/>
<label
  for="sM_1TTA"
>
  b
</label>
<input
  id="sM_1TUA"
/>
<label
  for="sM_1TUA"
>
  b
</label>
<button>
  clear
</button>
<input
  id="sM_2TTA"
/>
<label
  for="sM_2TTA"
>
  b
</label>
<input
  id="sM_2TUA"
/>
<label
  for="sM_2TUA"
>
  b
</label>
```
## Change
```
INSERT: label:nth-of-type(2) + button
UPDATE: label:nth-of-type(2)::text "a" => "b"
INSERT: button:nth-of-type(2) + :is(#sM_2TTA, label)
UPDATE: #sM_2TTA[id] null => "sM_2TTA"
UPDATE: label:nth-of-type(3)[for] null => "sM_2TTA"
UPDATE: label:nth-of-type(3)::text " " => "b"
INSERT: label:nth-of-type(3) + :is(#sM_2TUA, label)
UPDATE: #sM_2TUA[id] null => "sM_2TUA"
UPDATE: label:nth-of-type(4)[for] null => "sM_2TUA"
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
  id="sM_1TTA"
/>
<label
  for="sM_1TTA"
>
  c
</label>
<input
  id="sM_1TUA"
/>
<label
  for="sM_1TUA"
>
  c
</label>
<button>
  clear
</button>
<input
  id="sM_2TTA"
/>
<label
  for="sM_2TTA"
>
  c
</label>
<input
  id="sM_2TUA"
/>
<label
  for="sM_2TUA"
>
  c
</label>
<button>
  clear
</button>
<input
  id="sM_3TTA"
/>
<label
  for="sM_3TTA"
>
  c
</label>
<input
  id="sM_3TUA"
/>
<label
  for="sM_3TUA"
>
  c
</label>
```
## Change
```
INSERT: label:nth-of-type(4) + button
UPDATE: label:nth-of-type(2)::text "b" => "c"
UPDATE: label:nth-of-type(4)::text "b" => "c"
INSERT: button:nth-of-type(3) + :is(#sM_3TTA, label)
UPDATE: #sM_3TTA[id] null => "sM_3TTA"
UPDATE: label:nth-of-type(5)[for] null => "sM_3TTA"
UPDATE: label:nth-of-type(5)::text " " => "c"
INSERT: label:nth-of-type(5) + :is(#sM_3TUA, label)
UPDATE: #sM_3TUA[id] null => "sM_3TUA"
UPDATE: label:nth-of-type(6)[for] null => "sM_3TUA"
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
