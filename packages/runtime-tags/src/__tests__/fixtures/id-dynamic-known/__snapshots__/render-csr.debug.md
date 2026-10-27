# Render `{"items":[{"key":"a","on":true},{"key":"b","on":false}]}`
```html
<label
  for="cM_0"
>
  a
</label>
<input
  id="cM_0"
/>
<span>
  b
</span>
<p>
  <label
    for="cM_1"
  >
    a
  </label>
  <input
    id="cM_1"
  />
</p>
<div>
  <label
    for="cM_2"
  >
    b
  </label>
  <input
    id="cM_2"
  />
</div>
<span>
  a
</span>
<label
  for="cM_3"
>
  b
</label>
<input
  id="cM_3"
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

# Update `{"items":[{"key":"b","on":true},{"key":"c","on":false}]}`
```html
<label
  for="cM_0"
>
  b
</label>
<input
  id="cM_0"
/>
<span>
  c
</span>
<p>
  <label
    for="cM_1"
  >
    b
  </label>
  <input
    id="cM_1"
  />
</p>
<div>
  <label
    for="cM_2"
  >
    c
  </label>
  <input
    id="cM_2"
  />
</div>
<span>
  b
</span>
<label
  for="cM_3"
>
  c
</label>
<input
  id="cM_3"
/>
```
## Change
```
UPDATE: label:nth-of-type(1)::text "a" => "b"
UPDATE: span:nth-of-type(1)::text "b" => "c"
UPDATE: p > label::text "a" => "b"
UPDATE: div > label::text "b" => "c"
UPDATE: span:nth-of-type(2)::text "a" => "b"
UPDATE: label:nth-of-type(2)::text "b" => "c"
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
<label
  for="cM_0"
>
  c
</label>
<input
  id="cM_0"
/>
<p>
  <label
    for="cM_1"
  >
    c
  </label>
  <input
    id="cM_1"
  />
</p>
<span>
  c
</span>
```
## Change
```
REMOVE: #cM_0 + span
REMOVE: p + div
REMOVE: span + label
REMOVE: span + #cM_3
UPDATE: label::text "b" => "c"
UPDATE: p > label::text "b" => "c"
UPDATE: span::text "b" => "c"
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
