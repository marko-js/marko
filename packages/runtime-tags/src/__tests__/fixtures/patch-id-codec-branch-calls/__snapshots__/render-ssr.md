# Render `{"left":true,"right":true}`
```html
<label
  for="sM_TA"
>
  left
</label>
<input
  id="sM_TA"
/>
<label
  for="sM_UA"
>
  right
</label>
<input
  id="sM_UA"
/>
<label
  for="sM_WVA"
>
  repeat
</label>
<input
  id="sM_WVA"
/>
<label
  for="sM_XVA"
>
  repeat
</label>
<input
  id="sM_XVA"
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
  for="sM_UA"
>
  right
</label>
<input
  id="sM_UA"
/>
<label
  for="sM_WVA"
>
  repeat
</label>
<input
  id="sM_WVA"
/>
<label
  for="sM_XVA"
>
  repeat
</label>
<input
  id="sM_XVA"
/>
```
## Change
```
REMOVE: label
REMOVE: #sM_TA
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
  for="sM_TA"
>
  left
</label>
<input
  id="sM_TA"
/>
<label
  for="sM_UA"
>
  right
</label>
<input
  id="sM_UA"
/>
<label
  for="sM_WVA"
>
  repeat
</label>
<input
  id="sM_WVA"
/>
<label
  for="sM_XVA"
>
  repeat
</label>
<input
  id="sM_XVA"
/>
```
## Change
```
INSERT: label
INSERT: label:nth-of-type(1) + #sM_TA
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
