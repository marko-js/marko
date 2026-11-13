# Render `{"items":[{"key":"a","on":true},{"key":"b","on":false}]}`
```html
<p>
  <label
    for="sM_0UB"
  >
    attr
  </label>
  <input
    id="sM_0UB"
  />
</p>
<p>
  <label
    for="sM_0VTA"
  >
    body
  </label>
  <input
    id="sM_0VTA"
  />
</p>
<p>
  <label
    for="sM_0WA"
  >
    body
  </label>
  <input
    id="sM_0WA"
  />
</p>
<div>
  <label
    for="sM_1UB"
  >
    attr
  </label>
  <input
    id="sM_1UB"
  />
</div>
<div>
  <label
    for="sM_1VTA"
  >
    body
  </label>
  <input
    id="sM_1VTA"
  />
</div>
<div>
  <label
    for="sM_1WA"
  >
    body
  </label>
  <input
    id="sM_1WA"
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
