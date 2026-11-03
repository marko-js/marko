# Render `{"left":true,"right":true}`
```html
<label
  for="sM_UA"
>
  left
</label>
<input
  id="sM_UA"
/>
<label
  for="sM_VA"
>
  right
</label>
<input
  id="sM_VA"
/>
<label
  for="sM_XWA"
>
  repeat
</label>
<input
  id="sM_XWA"
/>
<label
  for="sM_YWA"
>
  repeat
</label>
<input
  id="sM_YWA"
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
  for="sM_VA"
>
  right
</label>
<input
  id="sM_VA"
/>
<label
  for="sM_XWA"
>
  repeat
</label>
<input
  id="sM_XWA"
/>
<label
  for="sM_YWA"
>
  repeat
</label>
<input
  id="sM_YWA"
/>
```
## Change
```
REMOVE: label
REMOVE: #sM_UA
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
  for="sM_UA"
>
  left
</label>
<input
  id="sM_UA"
/>
<label
  for="sM_VA"
>
  right
</label>
<input
  id="sM_VA"
/>
<label
  for="sM_XWA"
>
  repeat
</label>
<input
  id="sM_XWA"
/>
<label
  for="sM_YWA"
>
  repeat
</label>
<input
  id="sM_YWA"
/>
```
## Change
```
INSERT: label, #sM_UA
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
