# Render `{"show":true}`
```html
<label
  for="sM_TA"
>
  child
</label>
<input
  id="sM_TA"
/>
<input
  id="sM_A"
/>
<label
  for="sM_A"
>
  after child
</label>
<label
  for="sM_UA"
>
  dynamic
</label>
<input
  id="sM_UA"
/>
<input
  id="sM_B"
/>
<label
  for="sM_B"
>
  after tag
</label>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
const after = [...document.querySelectorAll("label")]
  .filter(isAfterLabel)
  .map(labelFor);
assert.equal(new Set(after).size, 2);
assert.deepEqual(after, (first ??= after));
}
```

# Update `{"show":false}`
```html
<input
  id="sM_A"
/>
<label
  for="sM_A"
>
  after child
</label>
<input
  id="sM_B"
/>
<label
  for="sM_B"
>
  after tag
</label>
```
## Change
```
REMOVE: label
REMOVE: #sM_TA
REMOVE: label:nth-of-type(1) + label
REMOVE: label:nth-of-type(1) + #sM_UA
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
const after = [...document.querySelectorAll("label")]
  .filter(isAfterLabel)
  .map(labelFor);
assert.equal(new Set(after).size, 2);
assert.deepEqual(after, (first ??= after));
}
```

# Update `{"show":true}`
```html
<label
  for="sM_TA"
>
  child
</label>
<input
  id="sM_TA"
/>
<input
  id="sM_A"
/>
<label
  for="sM_A"
>
  after child
</label>
<label
  for="sM_UA"
>
  dynamic
</label>
<input
  id="sM_UA"
/>
<input
  id="sM_B"
/>
<label
  for="sM_B"
>
  after tag
</label>
```
## Change
```
INSERT: label
INSERT: label:nth-of-type(1) + #sM_TA
INSERT: label:nth-of-type(2) + :is(label, #sM_UA)
UPDATE: label:nth-of-type(3)[for] null => "sM_UA"
UPDATE: label:nth-of-type(3)::text " " => "dynamic"
UPDATE: #sM_UA[id] null => "sM_UA"
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
const after = [...document.querySelectorAll("label")]
  .filter(isAfterLabel)
  .map(labelFor);
assert.equal(new Set(after).size, 2);
assert.deepEqual(after, (first ??= after));
}
```
