# Render `{"items":[{"key":"a","on":true},{"key":"b","on":false}]}`
```html
<p>
  <label
    for="sM_[0].#text/0@0.uid"
  >
    body
  </label>
  <input
    id="sM_[0].#text/0@0.uid"
  />
</p>
<div>
  <label
    for="sM_[1].#text/0@0.uid"
  >
    body
  </label>
  <input
    id="sM_[1].#text/0@0.uid"
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
