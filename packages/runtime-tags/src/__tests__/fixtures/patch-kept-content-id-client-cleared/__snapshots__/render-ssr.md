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

# Update
```js
d.querySelector("button").click();
```
```html
<button>
  clear
</button>
```
## Change
```
REMOVE: button + #sM_1UUA
REMOVE: button + label
REMOVE: button + #sM_1UVA
REMOVE: button + label
```

# Update `{"label":"b","rows":[{"id":1},{"id":2}]}`
```html
<button>
  clear
</button>
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
INSERT: button:nth-of-type(1) + button
INSERT: button:nth-of-type(2) + :is(#sM_2UUA, label)
INSERT: label:nth-of-type(1) + :is(#sM_2UVA, label)
UPDATE: #sM_2UUA[id] null => "sM_2UUA"
UPDATE: label:nth-of-type(1)[for] null => "sM_2UUA"
UPDATE: #sM_2UVA[id] null => "sM_2UVA"
UPDATE: label:nth-of-type(2)[for] null => "sM_2UVA"
UPDATE: label:nth-of-type(1)::text " " => "b"
UPDATE: label:nth-of-type(2)::text " " => "b"
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
