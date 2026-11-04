# Render `{"items":[{"key":"a","on":true},{"key":"b","on":false}]}`
```html
<div>
  <label
    for="cM_0"
  >
    body
  </label>
  <input
    id="cM_0"
  />
</div>
<div>
  <label
    for="cM_1"
  >
    body
  </label>
  <input
    id="cM_1"
  />
</div>
<section>
  <label
    for="cM_2"
  >
    body
  </label>
  <input
    id="cM_2"
  />
</section>
<section>
  <label
    for="cM_3"
  >
    body
  </label>
  <input
    id="cM_3"
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
    for="cM_0"
  >
    body
  </label>
  <input
    id="cM_0"
  />
</div>
<section>
  <label
    for="cM_2"
  >
    body
  </label>
  <input
    id="cM_2"
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
