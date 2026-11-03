# Render `{"items":[{"key":"a","on":true},{"key":"b","on":false}]}`
```html
<div>
  <label
    for="sM_[0].#div/0@0.uid"
  >
    body
  </label>
  <input
    id="sM_[0].#div/0@0.uid"
  />
</div>
<div>
  <label
    for="sM_[1].#div/0@0.uid"
  >
    body
  </label>
  <input
    id="sM_[1].#div/0@0.uid"
  />
</div>
<section>
  <label
    for="sM_[0].#section/0@1.uid"
  >
    body
  </label>
  <input
    id="sM_[0].#section/0@1.uid"
  />
</section>
<section>
  <label
    for="sM_[1].#section/0@1.uid"
  >
    body
  </label>
  <input
    id="sM_[1].#section/0@1.uid"
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
    for="sM_[0].#div/0@0.uid"
  >
    body
  </label>
  <input
    id="sM_[0].#div/0@0.uid"
  />
</div>
<section>
  <label
    for="sM_[0].#section/0@1.uid"
  >
    body
  </label>
  <input
    id="sM_[0].#section/0@1.uid"
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
