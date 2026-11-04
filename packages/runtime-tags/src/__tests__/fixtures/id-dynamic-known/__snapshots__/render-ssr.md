# Render `{"items":[{"key":"a","on":true},{"key":"b","on":false}]}`
```html
<label
  for="sM_1"
>
  a
</label>
<input
  id="sM_1"
/>
<span>
  b
</span>
<p>
  <label
    for="sM_2"
  >
    a
  </label>
  <input
    id="sM_2"
  />
</p>
<div>
  <label
    for="sM_3"
  >
    b
  </label>
  <input
    id="sM_3"
  />
</div>
<span>
  a
</span>
<label
  for="sM_4"
>
  b
</label>
<input
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
