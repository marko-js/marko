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
UPDATE: label:nth-of-type(1)::text "a" => "b"
UPDATE: label:nth-of-type(2)::text "a" => "b"
INSERT: label:nth-of-type(2) + :is(button, #sM_2UUUA, label, #sM_2UUVA, label)
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
UPDATE: label:nth-of-type(1)::text "b" => "c"
UPDATE: label:nth-of-type(2)::text "b" => "c"
UPDATE: label:nth-of-type(3)::text "b" => "c"
UPDATE: label:nth-of-type(4)::text "b" => "c"
INSERT: label:nth-of-type(4) + :is(button, #sM_3UUUA, label, #sM_3UUVA, label)
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
