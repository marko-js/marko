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

# Update `{"items":[{"key":"b","on":false},{"key":"c","on":true}]}`
```html
<div>
  <label
    for="sM_[0].#text/0@0.uid"
  >
    body
  </label>
  <input
    id="sM_[0].#text/0@0.uid"
  />
</div>
<p>
  <label
    for="sM_[1].#text/0@0.uid"
  >
    body
  </label>
  <input
    id="sM_[1].#text/0@0.uid"
  />
</p>
```
## Change
```
INSERT: div
REMOVE: div + p
INSERT: div > :is(label, #sM_[0].#text/0@0.uid)
UPDATE: div > label[for] "cM_0" => "sM_[0].#text/0@0.uid"
UPDATE: #sM_[0].#text/0@0.uid[id] "cM_0" => "sM_[0].#text/0@0.uid"
INSERT: div + p
REMOVE: p + div
INSERT: p > :is(label, #sM_[1].#text/0@0.uid)
UPDATE: p > label[for] "cM_1" => "sM_[1].#text/0@0.uid"
UPDATE: #sM_[1].#text/0@0.uid[id] "cM_1" => "sM_[1].#text/0@0.uid"
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
    for="sM_[0].#text/0@0.uid"
  >
    body
  </label>
  <input
    id="sM_[0].#text/0@0.uid"
  />
</p>
```
## Change
```
INSERT: p
REMOVE: p + div
INSERT: p > :is(label, #sM_[0].#text/0@0.uid)
UPDATE: p > label[for] "cM_2" => "sM_[0].#text/0@0.uid"
UPDATE: #sM_[0].#text/0@0.uid[id] "cM_2" => "sM_[0].#text/0@0.uid"
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
