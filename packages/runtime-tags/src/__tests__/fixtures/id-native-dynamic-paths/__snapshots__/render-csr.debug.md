# Render `{"items":[{"key":"a","on":true},{"key":"b","on":false}]}`
```html
<p>
  <label
    for="cM_0"
  >
    attr
  </label>
  <input
    id="cM_0"
  />
</p>
<p>
  <label
    for="cM_2"
  >
    body
  </label>
  <input
    id="cM_2"
  />
</p>
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
<div>
  <label
    for="cM_1"
  >
    attr
  </label>
  <input
    id="cM_1"
  />
</div>
<div>
  <label
    for="cM_4"
  >
    body
  </label>
  <input
    id="cM_4"
  />
</div>
<div>
  <label
    for="cM_5"
  >
    body
  </label>
  <input
    id="cM_5"
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
    for="cM_6"
  >
    attr
  </label>
  <input
    id="cM_6"
  />
</div>
<div>
  <label
    for="cM_9"
  >
    body
  </label>
  <input
    id="cM_9"
  />
</div>
<div>
  <label
    for="cM_8"
  >
    body
  </label>
  <input
    id="cM_8"
  />
</div>
<p>
  <label
    for="cM_7"
  >
    attr
  </label>
  <input
    id="cM_7"
  />
</p>
<p>
  <label
    for="cM_b"
  >
    body
  </label>
  <input
    id="cM_b"
  />
</p>
<p>
  <label
    for="cM_a"
  >
    body
  </label>
  <input
    id="cM_a"
  />
</p>
```
## Change
```
INSERT: div
REMOVE: div:nth-of-type(1) + p
INSERT: div:nth-of-type(1) > :is(label, #cM_6)
INSERT: div:nth-of-type(3) + p
REMOVE: p:nth-of-type(1) + div
INSERT: p:nth-of-type(1) > :is(label, #cM_7)
INSERT: div:nth-of-type(2) + div
REMOVE: div:nth-of-type(3) + p
INSERT: div:nth-of-type(3) > :is(label, #cM_8)
INSERT: div:nth-of-type(1) + div
REMOVE: div:nth-of-type(2) + p
INSERT: div:nth-of-type(2) > :is(label, #cM_9)
INSERT: p:nth-of-type(2) + p
REMOVE: p:nth-of-type(3) + div
INSERT: p:nth-of-type(3) > :is(label, #cM_a)
INSERT: p:nth-of-type(1) + p
REMOVE: p:nth-of-type(2) + div
INSERT: p:nth-of-type(2) > :is(label, #cM_b)
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
    for="cM_c"
  >
    attr
  </label>
  <input
    id="cM_c"
  />
</p>
<p>
  <label
    for="cM_e"
  >
    body
  </label>
  <input
    id="cM_e"
  />
</p>
<p>
  <label
    for="cM_d"
  >
    body
  </label>
  <input
    id="cM_d"
  />
</p>
```
## Change
```
INSERT: p
REMOVE: p:nth-of-type(1) + div
INSERT: p:nth-of-type(1) > :is(label, #cM_c)
REMOVE: p:nth-of-type(3) + p
REMOVE: p:nth-of-type(3) + p
REMOVE: p:nth-of-type(3) + p
INSERT: p:nth-of-type(2) + p
REMOVE: p:nth-of-type(3) + div
INSERT: p:nth-of-type(3) > :is(label, #cM_d)
INSERT: p:nth-of-type(1) + p
REMOVE: p:nth-of-type(2) + div
INSERT: p:nth-of-type(2) > :is(label, #cM_e)
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
