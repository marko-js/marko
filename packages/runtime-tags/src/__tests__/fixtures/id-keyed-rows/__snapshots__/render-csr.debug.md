# Render `{"items":[{"key":"a"},{"key":"b"}]}`
```html
<label
  for="cM_0"
>
  a
</label>
<input
  id="cM_0"
/>
<label
  for="cM_1"
>
  b
</label>
<input
  id="cM_1"
/>
```

# Update `{"items":[{"key":"b"},{"key":"c"}]}`
```html
<label
  for="cM_1"
>
  b
</label>
<input
  id="cM_1"
/>
<label
  for="cM_2"
>
  c
</label>
<input
  id="cM_2"
/>
```
## Change
```
REMOVE: label
REMOVE: #cM_0
INSERT: #cM_1 + :is(label, #cM_2)
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
  for="cM_3"
>
  1
</label>
<input
  id="cM_3"
/>
<label
  for="cM_4"
>
  1
</label>
<input
  id="cM_4"
/>
<label
  for="cM_5"
>
  -
</label>
<input
  id="cM_5"
/>
<label
  for="cM_6"
>
  _
</label>
<input
  id="cM_6"
/>
```
## Change
```
REMOVE: label
REMOVE: #cM_1
REMOVE: label
REMOVE: #cM_2
INSERT: label, #cM_3
INSERT: #cM_3 + :is(label, #cM_4)
INSERT: #cM_4 + :is(label, #cM_5)
INSERT: #cM_5 + :is(label, #cM_6)
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
