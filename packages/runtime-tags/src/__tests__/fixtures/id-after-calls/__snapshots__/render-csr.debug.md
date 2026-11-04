# Render `{"show":true}`
```html
<label
  for="cM_2"
>
  child
</label>
<input
  id="cM_2"
/>
<input
  id="cM_0"
/>
<label
  for="cM_0"
>
  after child
</label>
<label
  for="cM_3"
>
  dynamic
</label>
<input
  id="cM_3"
/>
<input
  id="cM_1"
/>
<label
  for="cM_1"
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
  id="cM_0"
/>
<label
  for="cM_0"
>
  after child
</label>
<input
  id="cM_1"
/>
<label
  for="cM_1"
>
  after tag
</label>
```
## Change
```
REMOVE: label
REMOVE: #cM_2
REMOVE: label:nth-of-type(1) + label
REMOVE: label:nth-of-type(1) + #cM_3
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
  for="cM_4"
>
  child
</label>
<input
  id="cM_4"
/>
<input
  id="cM_0"
/>
<label
  for="cM_0"
>
  after child
</label>
<label
  for="cM_5"
>
  dynamic
</label>
<input
  id="cM_5"
/>
<input
  id="cM_1"
/>
<label
  for="cM_1"
>
  after tag
</label>
```
## Change
```
INSERT: label, #cM_4
INSERT: label:nth-of-type(2) + :is(label, #cM_5)
UPDATE: label:nth-of-type(3)[for] null => "cM_5"
UPDATE: #cM_5[id] null => "cM_5"
UPDATE: label:nth-of-type(3)::text " " => "dynamic"
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
