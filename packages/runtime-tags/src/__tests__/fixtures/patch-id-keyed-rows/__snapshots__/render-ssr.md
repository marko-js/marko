# Render `{"items":[{"key":"a"},{"key":"b"}]}`
```html
<label
  for="sM_gaA"
>
  a
</label>
<input
  id="sM_gaA"
/>
<label
  for="sM_gbA"
>
  b
</label>
<input
  id="sM_gbA"
/>
```

# Update `{"items":[{"key":"b"},{"key":"c"}]}`
```html
<label
  for="sM_gbA"
>
  b
</label>
<input
  id="sM_gbA"
/>
<label
  for="sM_gcA"
>
  c
</label>
<input
  id="sM_gcA"
/>
```
## Change
```
REMOVE: label
REMOVE: #sM_gaA
INSERT: #sM_gbA + :is(label, #sM_gcA)
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate id: " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
}
```

# Update `{"items":[{"key":1},{"key":"1"},{"key":"-"},{"key":"_"}]}`
```html
<label
  for="sM_1A"
>
  1
</label>
<input
  id="sM_1A"
/>
<label
  for="sM_g1A"
>
  1
</label>
<input
  id="sM_g1A"
/>
<label
  for="sM_g-A"
>
  -
</label>
<input
  id="sM_g-A"
/>
<label
  for="sM_g_A"
>
  _
</label>
<input
  id="sM_g_A"
/>
```
## Change
```
REMOVE: label
REMOVE: #sM_gbA
REMOVE: label
REMOVE: #sM_gcA
INSERT: label, #sM_1A
INSERT: #sM_1A + :is(label, #sM_g1A)
INSERT: #sM_g1A + :is(label, #sM_g-A)
INSERT: #sM_g-A + :is(label, #sM_g_A)
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate id: " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
}
```
