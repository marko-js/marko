# Render `{"items":[{"key":"a","on":true},{"key":"b","on":false}]}`
```html
<div>
  <label
    for="sM_0UA"
  >
    body
  </label>
  <input
    id="sM_0UA"
  />
</div>
<div>
  <label
    for="sM_1UA"
  >
    body
  </label>
  <input
    id="sM_1UA"
  />
</div>
<section>
  <label
    for="sM_0VA"
  >
    body
  </label>
  <input
    id="sM_0VA"
  />
</section>
<section>
  <label
    for="sM_1VA"
  >
    body
  </label>
  <input
    id="sM_1VA"
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

# Update `{"items":[{"key":"b","on":true},{"key":"c","on":false}]}`

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

# Update `{"items":[{"key":"c","on":true}]}`
```html
<div>
  <label
    for="sM_0UA"
  >
    body
  </label>
  <input
    id="sM_0UA"
  />
</div>
<section>
  <label
    for="sM_0VA"
  >
    body
  </label>
  <input
    id="sM_0VA"
  />
</section>
```
## Change
```
REMOVE: div + div
REMOVE: section + section
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
