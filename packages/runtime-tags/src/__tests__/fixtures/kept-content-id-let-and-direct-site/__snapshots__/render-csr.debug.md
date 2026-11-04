# Render `{"label":"a","rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<input
  id="cM_0"
/>
<label
  for="cM_0"
>
  a
</label>
<input
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
<button>
  clear
</button>
<input
  id="cM_2"
/>
<label
  for="cM_2"
>
  b
</label>
<input
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
  id="cM_0"
/>
<label
  for="cM_0"
>
  c
</label>
<input
  id="cM_1"
/>
<label
  for="cM_1"
>
  c
</label>
<button>
  clear
</button>
<input
  id="cM_2"
/>
<label
  for="cM_2"
>
  c
</label>
<input
  id="cM_3"
/>
<label
  for="cM_3"
>
  c
</label>
<button>
  clear
</button>
<input
  id="cM_4"
/>
<label
  for="cM_4"
>
  c
</label>
<input
  id="cM_5"
/>
<label
  for="cM_5"
>
  c
</label>
```
## Change
```
INSERT: label:nth-of-type(4) + :is(button, #cM_4, label, #cM_5, label)
UPDATE: label:nth-of-type(1)::text "b" => "c"
UPDATE: label:nth-of-type(2)::text "b" => "c"
UPDATE: label:nth-of-type(3)::text "b" => "c"
UPDATE: label:nth-of-type(4)::text "b" => "c"
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
