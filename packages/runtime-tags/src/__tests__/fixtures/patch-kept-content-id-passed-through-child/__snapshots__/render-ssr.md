# Render `{"label":"a","rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<input
  id="sM_1UUUA"
/>
<label
  for="sM_1UUUA"
>
  a
</label>
<input
  id="sM_1UUVA"
/>
<label
  for="sM_1UUVA"
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
  id="sM_1UUUA"
/>
<label
  for="sM_1UUUA"
>
  b
</label>
<input
  id="sM_1UUVA"
/>
<label
  for="sM_1UUVA"
>
  b
</label>
<button>
  clear
</button>
<input
  id="sM_2UUUA"
/>
<label
  for="sM_2UUUA"
>
  b
</label>
<input
  id="sM_2UUVA"
/>
<label
  for="sM_2UUVA"
>
  b
</label>
```
## Change
```
INSERT: label:nth-of-type(2) + button
UPDATE: label:nth-of-type(1)::text "a" => "b"
UPDATE: label:nth-of-type(2)::text "a" => "b"
INSERT: button:nth-of-type(2) + :is(#sM_2UUUA, label)
INSERT: label:nth-of-type(3) + :is(#sM_2UUVA, label)
UPDATE: #sM_2UUUA[id] null => "sM_2UUUA"
UPDATE: label:nth-of-type(3)[for] null => "sM_2UUUA"
UPDATE: #sM_2UUVA[id] null => "sM_2UUVA"
UPDATE: label:nth-of-type(4)[for] null => "sM_2UUVA"
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
  id="sM_1UUUA"
/>
<label
  for="sM_1UUUA"
>
  c
</label>
<input
  id="sM_1UUVA"
/>
<label
  for="sM_1UUVA"
>
  c
</label>
<button>
  clear
</button>
<input
  id="sM_2UUUA"
/>
<label
  for="sM_2UUUA"
>
  c
</label>
<input
  id="sM_2UUVA"
/>
<label
  for="sM_2UUVA"
>
  c
</label>
<button>
  clear
</button>
<input
  id="sM_3UUUA"
/>
<label
  for="sM_3UUUA"
>
  c
</label>
<input
  id="sM_3UUVA"
/>
<label
  for="sM_3UUVA"
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
INSERT: button:nth-of-type(3) + :is(#sM_3UUUA, label)
INSERT: label:nth-of-type(5) + :is(#sM_3UUVA, label)
UPDATE: #sM_3UUUA[id] null => "sM_3UUUA"
UPDATE: label:nth-of-type(5)[for] null => "sM_3UUUA"
UPDATE: #sM_3UUVA[id] null => "sM_3UUVA"
UPDATE: label:nth-of-type(6)[for] null => "sM_3UUVA"
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
