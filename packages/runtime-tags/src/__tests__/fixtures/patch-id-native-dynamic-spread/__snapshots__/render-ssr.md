# Render `{"items":[{"key":"a","on":true},{"key":"b","on":false}]}`
```html
<p>
  <label
    for="sM_0UA"
  >
    body
  </label>
  <input
    id="sM_0UA"
  />
</p>
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
    for="sM_0UA"
  >
    body
  </label>
  <input
    id="sM_0UA"
  />
</div>
<p>
  <label
    for="sM_1UA"
  >
    body
  </label>
  <input
    id="sM_1UA"
  />
</p>
```
## Change
```
INSERT: div
REMOVE: div + p
INSERT: div > :is(label, #sM_0UA)
UPDATE: div > label[for] "cM_0" => "sM_0UA"
UPDATE: #sM_0UA[id] "cM_0" => "sM_0UA"
INSERT: div + p
REMOVE: p + div
INSERT: p > :is(label, #sM_1UA)
UPDATE: p > label[for] "cM_1" => "sM_1UA"
UPDATE: #sM_1UA[id] "cM_1" => "sM_1UA"
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
    for="sM_0UA"
  >
    body
  </label>
  <input
    id="sM_0UA"
  />
</p>
```
## Change
```
INSERT: p
REMOVE: p + div
INSERT: p > :is(label, #sM_0UA)
UPDATE: p > label[for] "cM_2" => "sM_0UA"
UPDATE: #sM_0UA[id] "cM_2" => "sM_0UA"
REMOVE: p + p
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
