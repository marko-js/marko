# Render `{"items":[{"key":"a","on":true},{"key":"b","on":false}]}`
```html
<p>
  <label
    for="sM_0TA"
  >
    body
  </label>
  <input
    id="sM_0TA"
  />
</p>
<div>
  <label
    for="sM_1TA"
  >
    body
  </label>
  <input
    id="sM_1TA"
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
    for="sM_0TA"
  >
    body
  </label>
  <input
    id="sM_0TA"
  />
</div>
<p>
  <label
    for="sM_1TA"
  >
    body
  </label>
  <input
    id="sM_1TA"
  />
</p>
```
## Change
```
INSERT: div
REMOVE: div + p
INSERT: div > :is(label, #sM_0TA)
UPDATE: div > label[for] "cM_0" => "sM_0TA"
UPDATE: #sM_0TA[id] "cM_0" => "sM_0TA"
INSERT: div + p
REMOVE: p + div
INSERT: p > :is(label, #sM_1TA)
UPDATE: p > label[for] "cM_1" => "sM_1TA"
UPDATE: #sM_1TA[id] "cM_1" => "sM_1TA"
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
    for="sM_0TA"
  >
    body
  </label>
  <input
    id="sM_0TA"
  />
</p>
```
## Change
```
REMOVE: p + p
INSERT: p
REMOVE: p + div
INSERT: p > :is(label, #sM_0TA)
UPDATE: p > label[for] "cM_2" => "sM_0TA"
UPDATE: #sM_0TA[id] "cM_2" => "sM_0TA"
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
