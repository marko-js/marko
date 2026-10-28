# Render `{"rows":[{"id":1}]}`
```html
<span>
  plain
</span>
<label
  for="cM_0"
>
  1
</label>
<input
  id="cM_0"
/>
caught
<label
  for="cM_1"
>
  row 1
</label>
<input
  id="cM_1"
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
  for="cM_0"
>
  1
</label>
<input
  id="cM_0"
/>
caught
<label
  for="cM_1"
>
  row 1
</label>
<input
  id="cM_1"
/>
<span>
  plain
</span>
<label
  for="cM_2"
>
  2
</label>
<input
  id="cM_2"
/>
caught
<label
  for="cM_3"
>
  row 2
</label>
<input
  id="cM_3"
/>
```
## Change
```
INSERT: #cM_1 + :is(span, label, #cM_2, p, label, #cM_3)
INSERT: #cM_2 + ::text("caught")
REMOVE: ::text@6 + p
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
