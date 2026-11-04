# Render `{"promise":{}}`
```html
<h1
  id="sM_1"
>
  Fields
</h1>
<label
  for="sM_2"
>
  before
</label>
<input
  aria-describedby="sM_1"
  id="sM_2"
/>
<label
  for="sM_3"
>
  a
</label>
<input
  aria-describedby="sM_1"
  id="sM_3"
/>
<label
  for="sM_4"
>
  b
</label>
<input
  aria-describedby="sM_1"
  id="sM_4"
/>
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
