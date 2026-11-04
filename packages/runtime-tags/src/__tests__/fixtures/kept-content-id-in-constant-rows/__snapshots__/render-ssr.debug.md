# Render `{"label":"a"}`
```html
<p>
  a
</p>
<button>
  clear
</button>
<input
  id="sM_1"
  name="r"
  type="radio"
/>
<label
  for="sM_1"
>
  1
</label>
<input
  id="sM_2"
  name="r"
  type="radio"
/>
<label
  for="sM_2"
>
  2
</label>
<input
  id="sM_3"
  name="r"
  type="radio"
/>
<label
  for="sM_3"
>
  1
</label>
<input
  id="sM_4"
  name="r"
  type="radio"
/>
<label
  for="sM_4"
>
  2
</label>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
}
```
