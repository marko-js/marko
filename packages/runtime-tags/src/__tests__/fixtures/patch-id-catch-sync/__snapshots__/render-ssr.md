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
INSERT: #sM_1VA + :is(span, label, #sM_2UVA, ::text("caught"), label, #sM_2VA)
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
