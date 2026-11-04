# Render `{"label":"a"}`
```html
<button>
  clear
</button>
<input
  id="sM_1"
  title="a sM_1"
/>
<label
  for="sM_1"
>
  a
</label>
<input
  id="sM_2"
  title="a sM_2"
/>
<label
  for="sM_2"
>
  a
</label>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
  assert.equal(
input.title,
input.labels [0].textContent + " " + input.id,
"title of " + input.id,
  );
}
```
