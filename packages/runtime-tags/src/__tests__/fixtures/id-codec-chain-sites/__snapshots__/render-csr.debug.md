# Render `{"mode":0,"nested":true,"other":true}`
```html
<label
  for="cM_2"
>
  field
</label>
<input
  id="cM_2"
/>
<label
  for="cM_4"
>
  field
</label>
<input
  id="cM_4"
/>
<label
  for="cM_5"
>
  field
</label>
<input
  id="cM_5"
/>
<label
  for="cM_0"
>
  field
</label>
<input
  id="cM_0"
/>
<label
  for="cM_1"
>
  field
</label>
<input
  id="cM_1"
/>
<label
  for="cM_3"
>
  field
</label>
<input
  id="cM_3"
/>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
}
```

# Update `{"mode":1,"nested":true,"other":true}`
```html
<label
  for="cM_6"
>
  field
</label>
<input
  id="cM_6"
/>
<label
  for="cM_7"
>
  field
</label>
<input
  id="cM_7"
/>
<label
  for="cM_8"
>
  field
</label>
<input
  id="cM_8"
/>
<label
  for="cM_9"
>
  field
</label>
<input
  id="cM_9"
/>
<label
  for="cM_0"
>
  field
</label>
<input
  id="cM_0"
/>
<label
  for="cM_1"
>
  field
</label>
<input
  id="cM_1"
/>
<label
  for="cM_3"
>
  field
</label>
<input
  id="cM_3"
/>
```
## Change
```
INSERT: label, #cM_6, label, #cM_7, label, #cM_8, label, #cM_9
REMOVE: #cM_9 + label
REMOVE: #cM_9 + #cM_2
REMOVE: #cM_9 + label
REMOVE: #cM_9 + #cM_4
REMOVE: #cM_9 + label
REMOVE: #cM_9 + #cM_5
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
}
```

# Update `{"mode":2,"nested":false,"other":true}`
```html
<label
  for="cM_a"
>
  field
</label>
<input
  id="cM_a"
/>
<label
  for="cM_0"
>
  field
</label>
<input
  id="cM_0"
/>
<label
  for="cM_1"
>
  field
</label>
<input
  id="cM_1"
/>
<label
  for="cM_3"
>
  field
</label>
<input
  id="cM_3"
/>
```
## Change
```
INSERT: label, #cM_a
REMOVE: #cM_a + label
REMOVE: #cM_a + #cM_6
REMOVE: #cM_a + label
REMOVE: #cM_a + #cM_7
REMOVE: #cM_a + label
REMOVE: #cM_a + #cM_8
REMOVE: #cM_a + label
REMOVE: #cM_a + #cM_9
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
}
```

# Update `{"mode":0,"nested":false,"other":false}`
```html
<label
  for="cM_b"
>
  field
</label>
<input
  id="cM_b"
/>
<label
  for="cM_0"
>
  field
</label>
<input
  id="cM_0"
/>
<label
  for="cM_1"
>
  field
</label>
<input
  id="cM_1"
/>
```
## Change
```
INSERT: label, #cM_b
REMOVE: #cM_b + label
REMOVE: #cM_b + #cM_a
REMOVE: #cM_1 + label
REMOVE: #cM_1 + #cM_3
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
}
```
