# Render `{"rows":[{"id":1}]}`
```html
<span>
  plain
</span>
<label
  for="sM_1UVA"
>
  1
</label>
<input
  id="sM_1UVA"
/>
caught
<label
  for="sM_1VA"
>
  row 1
</label>
<input
  id="sM_1VA"
/>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
assert.equal(ids.size, document.querySelectorAll("input").length);
}
```

# Update `{"rows":[{"id":1},{"id":2}]}`
```html
<span>
  plain
</span>
<label
  for="sM_1UVA"
>
  1
</label>
<input
  id="sM_1UVA"
/>
caught
<label
  for="sM_1VA"
>
  row 1
</label>
<input
  id="sM_1VA"
/>
<span>
  plain
</span>
<label
  for="sM_2UVA"
>
  2
</label>
<input
  id="sM_2UVA"
/>
caught
<label
  for="sM_2VA"
>
  row 2
</label>
<input
  id="sM_2VA"
/>
```
## Change
```
INSERT: #sM_1VA + :is(span, label, #sM_2UVA, label, #sM_2VA)
UPDATE: label:nth-of-type(3)[for] null => "sM_2UVA"
UPDATE: label:nth-of-type(3)::text " " => "2"
UPDATE: #sM_2UVA[id] null => "sM_2UVA"
INSERT: #sM_2UVA + p
INSERT: #sM_2UVA + ::text("caught")
REMOVE: ::text@6 + p
UPDATE: label:nth-of-type(4)[for] null => "sM_2VA"
UPDATE: label:nth-of-type(4)::text " " => "row 2"
UPDATE: #sM_2VA[id] null => "sM_2VA"
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
assert.equal(ids.size, document.querySelectorAll("input").length);
}
```
