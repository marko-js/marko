# Render `{"left":true,"right":true}`
```html
<label
  for="cM_0"
>
  left
</label>
<input
  id="cM_0"
/>
<label
  for="cM_1"
>
  right
</label>
<input
  id="cM_1"
/>
<label
  for="cM_2"
>
  repeat
</label>
<input
  id="cM_2"
/>
<label
  for="cM_3"
>
  repeat
</label>
<input
  id="cM_3"
/>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate id: " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
  assert.equal(document.getElementById(input.id), input);
}
```

# Update `{"left":false,"right":true}`
```html
<label
  for="cM_1"
>
  right
</label>
<input
  id="cM_1"
/>
<label
  for="cM_2"
>
  repeat
</label>
<input
  id="cM_2"
/>
<label
  for="cM_3"
>
  repeat
</label>
<input
  id="cM_3"
/>
```
## Change
```
REMOVE: label
REMOVE: #cM_0
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate id: " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
  assert.equal(document.getElementById(input.id), input);
}
```

# Update `{"left":true,"right":true}`
```html
<label
  for="cM_4"
>
  left
</label>
<input
  id="cM_4"
/>
<label
  for="cM_1"
>
  right
</label>
<input
  id="cM_1"
/>
<label
  for="cM_2"
>
  repeat
</label>
<input
  id="cM_2"
/>
<label
  for="cM_3"
>
  repeat
</label>
<input
  id="cM_3"
/>
```
## Change
```
INSERT: label, #cM_4
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate id: " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1);
  assert.equal(document.getElementById(input.id), input);
}
```
