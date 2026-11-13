# Render `{"rows":[{"id":1}]}`
```html
<span>
  plain
</span>
<label
  for="sM_1TUA"
>
  1
</label>
<input
  id="sM_1TUA"
/>
caught
<label
  for="sM_1UA"
>
  row 1
</label>
<input
  id="sM_1UA"
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
  for="sM_1TUA"
>
  1
</label>
<input
  id="sM_1TUA"
/>
caught
<label
  for="sM_1UA"
>
  row 1
</label>
<input
  id="sM_1UA"
/>
<span>
  plain
</span>
<label
  for="sM_2TUA"
>
  2
</label>
<input
  id="sM_2TUA"
/>
caught
<label
  for="sM_2UA"
>
  row 2
</label>
<input
  id="sM_2UA"
/>
```
## Change
```
INSERT: #sM_1UA + :is(span, label, #sM_2TUA, label, #sM_2UA)
UPDATE: label:nth-of-type(3)[for] null => "sM_2TUA"
UPDATE: label:nth-of-type(3)::text " " => "2"
UPDATE: #sM_2TUA[id] null => "sM_2TUA"
INSERT: #sM_2TUA + p
INSERT: #sM_2TUA + ::text("caught")
REMOVE: ::text@6 + p
UPDATE: label:nth-of-type(4)[for] null => "sM_2UA"
UPDATE: label:nth-of-type(4)::text " " => "row 2"
UPDATE: #sM_2UA[id] null => "sM_2UA"
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
