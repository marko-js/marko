# Render `{"loaded":false,"items":[{"key":"a","promise":{}},{"key":"b","promise":{}}]}`
```html
<section
  name="a"
>
  <label
    for="sM_1"
  >
    a
  </label>
  <input
    id="sM_1"
  />
</section>
<section
  name="b"
>
  <label
    for="sM_2"
  >
    b
  </label>
  <input
    id="sM_2"
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
