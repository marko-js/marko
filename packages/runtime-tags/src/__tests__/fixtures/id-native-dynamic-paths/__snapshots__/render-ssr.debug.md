# Render `{"items":[{"key":"a","on":true},{"key":"b","on":false}]}`
```html
<p>
  <label
    for="sM_1"
  >
    attr
  </label>
  <input
    id="sM_1"
  />
</p>
<p>
  <label
    for="sM_2"
  >
    body
  </label>
  <input
    id="sM_2"
  />
</p>
<p>
  <label
    for="sM_3"
  >
    body
  </label>
  <input
    id="sM_3"
  />
</p>
<div>
  <label
    for="sM_4"
  >
    attr
  </label>
  <input
    id="sM_4"
  />
</div>
<div>
  <label
    for="sM_5"
  >
    body
  </label>
  <input
    id="sM_5"
  />
</div>
<div>
  <label
    for="sM_6"
  >
    body
  </label>
  <input
    id="sM_6"
  />
</div>
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
