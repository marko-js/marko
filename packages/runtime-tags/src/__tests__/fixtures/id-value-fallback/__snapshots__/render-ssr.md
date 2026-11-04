# Render `{"heading":"provided-heading","items":[{"key":"a","uid":"provided-a"},{"key":"b"}]}`
```html
<h1
  id="provided-heading"
>
  Fields
</h1>
<label
  for="sM_1"
>
  second
</label>
<input
  id="sM_1"
/>
<label
  for="provided-a"
>
  a
</label>
<input
  aria-describedby="provided-heading"
  id="provided-a"
/>
<label
  for="sM_2"
>
  b
</label>
<input
  aria-describedby="provided-heading"
  id="sM_2"
/>
<label
  for="given"
>
  local
</label>
<input
  id="given"
/>
<button>
  toggle
</button>
```

# Update
```js
const seen = new Set();
for (const element of document.querySelectorAll("[id]")) {
  assert(!seen.has(element.id), "duplicate id: " + element.id);
  seen.add(element.id);
for (const input of document.querySelectorAll(
  "input[id]",
)) {
  assert.equal(input.labels?.length, 1, input.outerHTML);
  const ref = input.getAttribute("aria-describedby");
  if (ref) assert(document.getElementById(ref), "missing reference: " + ref);
}
}
```
