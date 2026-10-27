# Render `{"flip":false,"items":[{"key":"a"},{"key":"b"}]}`
```html
<label
  for="sM_1"
>
  other
</label>
<input
  id="sM_1"
/>
<section
  name="dynamic"
>
  <label
    for="sM_2"
  >
    content
  </label>
  <input
    id="sM_2"
  />
</section>
<label
  for="sM_3"
>
  a
</label>
<input
  id="sM_3"
/>
<label
  for="sM_4"
>
  b
</label>
<input
  id="sM_4"
/>
<section>
  <label
    for="sM_5"
  >
    forwarded
  </label>
  <input
    id="sM_5"
  />
</section>
<aside>
  <label
    for="sM_6"
  >
    forwarded
  </label>
  <input
    id="sM_6"
  />
</aside>
<label
  for="sM_7"
>
  nested
</label>
<input
  id="sM_7"
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
