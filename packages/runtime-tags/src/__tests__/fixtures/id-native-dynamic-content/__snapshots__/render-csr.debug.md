# Render `{"items":[{"key":"a","on":true},{"key":"b","on":false}]}`
```html
<p>
  <label
    for="cM_0"
  >
    body
  </label>
  <input
    id="cM_0"
  />
</p>
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

# Update `{"items":[{"key":"b","on":false},{"key":"c","on":true}]}`
```html
<div>
  <label
    for="cM_2"
  >
    body
  </label>
  <input
    id="cM_2"
  />
</div>
<p>
  <label
    for="cM_3"
  >
    body
  </label>
  <input
    id="cM_3"
  />
</p>
```
## Change
```
INSERT: div
REMOVE: div + p
INSERT: div > :is(label, #cM_2)
INSERT: div + p
REMOVE: p + div
INSERT: p > :is(label, #cM_3)
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

# Update `{"items":[{"key":"c","on":true}]}`
```html
<p>
  <label
    for="cM_4"
  >
    body
  </label>
  <input
    id="cM_4"
  />
</p>
```
## Change
```
REMOVE: p + p
INSERT: p
REMOVE: p + div
INSERT: p > :is(label, #cM_4)
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
