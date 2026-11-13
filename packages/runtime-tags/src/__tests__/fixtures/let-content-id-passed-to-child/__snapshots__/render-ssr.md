# Render `{"label":"a"}`
```html
<button>
  clear
</button>
<input
  aria-describedby="sM_1 sM_2"
  id="sM_1"
/>
<label
  for="sM_1"
>
  a
</label>
<p
  id="sM_2"
>
  hint
</p>
<input
  aria-describedby="sM_3 sM_4"
  id="sM_3"
/>
<label
  for="sM_3"
>
  a
</label>
<p
  id="sM_4"
>
  hint
</p>
```

# Update
```js
const ids = new Set();
for (const input of document.querySelectorAll("input")) {
  assert(!ids.has(input.id), "duplicate " + input.id);
  ids.add(input.id);
  assert.equal(input.labels?.length, 1, "labels of " + input.id);
  for (const id of input.getAttribute("aria-describedby").split(" ")) {
assert(document.getElementById(id), "described by " + id);
}
}
```
