# Render `{"label":"a","rows":[{"id":1}]}`
```html
<button>
  clear
</button>
<input
  data-self="sM_1"
  id="sM_1"
/>
<label
  for="sM_1"
>
  a
</label>
<input
  data-self="sM_2"
  id="sM_2"
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
for (const label of document.querySelectorAll("label")) {
  assert(ids.has(label.htmlFor), "unmatched label " + label.htmlFor);
}
for (const el of document.querySelectorAll("[data-self]")) {
  assert.equal(
el.getAttribute("data-self"),
el.id,
"script read of " + el.id,
  );
}
}
```
