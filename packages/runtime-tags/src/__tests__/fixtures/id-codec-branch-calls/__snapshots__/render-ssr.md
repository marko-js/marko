# Render `{"left":true,"right":true}`
```html
<label
  for="sM_1"
>
  left
</label>
<input
  id="sM_1"
/>
<label
  for="sM_2"
>
  right
</label>
<input
  id="sM_2"
/>
<label
  for="sM_3"
>
  repeat
</label>
<input
  id="sM_3"
/>
<label
  for="sM_4"
>
  repeat
</label>
<input
  id="sM_4"
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
