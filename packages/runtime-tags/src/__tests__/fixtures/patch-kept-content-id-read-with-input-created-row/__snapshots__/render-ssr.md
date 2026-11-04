# Render `{"label":"a","rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<input
  id="sM_1UUA"
  title="a sM_1UUA"
/>
<label
  for="sM_1UUA"
>
  a
</label>
<input
  id="sM_1UVA"
  title="a sM_1UVA"
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
  assert.equal(
input.title,
input.labels [0].textContent + " " + input.id,
"title of " + input.id,
  );
}
```

# Update `{"label":"b","rows":[{"id":1},{"id":2}]}`
```html
<button>
  clear
</button>
<input
  id="sM_1UUA"
  title="b sM_1UUA"
/>
<label
  for="sM_1UUA"
>
  b
</label>
<input
  id="sM_1UVA"
  title="b sM_1UVA"
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
  title="b sM_2UUA"
/>
<label
  for="sM_2UUA"
>
  b
</label>
<input
  id="sM_2UVA"
  title="b sM_2UVA"
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
UPDATE: #sM_1UUA[title] "a sM_1UUA" => "b sM_1UUA"
UPDATE: label:nth-of-type(1)::text "a" => "b"
UPDATE: #sM_1UVA[title] "a sM_1UVA" => "b sM_1UVA"
UPDATE: label:nth-of-type(2)::text "a" => "b"
INSERT: button:nth-of-type(2) + :is(#sM_2UUA, label)
INSERT: label:nth-of-type(3) + :is(#sM_2UVA, label)
UPDATE: #sM_2UUA[id] null => "sM_2UUA"
UPDATE: label:nth-of-type(3)[for] null => "sM_2UUA"
UPDATE: #sM_2UUA[title] null => "b sM_2UUA"
UPDATE: label:nth-of-type(3)::text " " => "b"
UPDATE: #sM_2UVA[id] null => "sM_2UVA"
UPDATE: label:nth-of-type(4)[for] null => "sM_2UVA"
UPDATE: #sM_2UVA[title] null => "b sM_2UVA"
UPDATE: label:nth-of-type(4)::text " " => "b"
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
  assert.equal(
input.title,
input.labels [0].textContent + " " + input.id,
"title of " + input.id,
  );
}
```
