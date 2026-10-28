# Render `{"items":[{"key":"a","on":true},{"key":"b","on":false}]}`
```html
<div>
  <label
    for="sM_1"
  >
    body
  </label>
  <input
    id="sM_1"
  />
</div>
<div>
  <label
    for="sM_2"
  >
    body
  </label>
  <input
    id="sM_2"
  />
</div>
<section>
  <label
    for="sM_3"
  >
    body
  </label>
  <input
    id="sM_3"
  />
</section>
<section>
  <label
    for="sM_4"
  >
    body
  </label>
  <input
    id="sM_4"
  />
</section>
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
