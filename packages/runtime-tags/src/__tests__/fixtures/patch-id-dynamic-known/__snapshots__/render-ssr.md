# Render `{"items":[{"key":"a","on":true},{"key":"b","on":false}]}`
```html
<label
  for="sM_0TA"
>
  a
</label>
<input
  id="sM_0TA"
/>
<span>
  b
</span>
<p>
  <label
    for="sM_0UA"
  >
    a
  </label>
  <input
    id="sM_0UA"
  />
</p>
<div>
  <label
    for="sM_1UA"
  >
    b
  </label>
  <input
    id="sM_1UA"
  />
</div>
<span>
  a
</span>
<label
  for="sM_1VB"
>
  b
</label>
<input
  id="sM_1VB"
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
  for="sM_0TA"
>
  b
</label>
<input
  id="sM_0TA"
/>
<span>
  c
</span>
<p>
  <label
    for="sM_0UA"
  >
    b
  </label>
  <input
    id="sM_0UA"
  />
</p>
<div>
  <label
    for="sM_1UA"
  >
    c
  </label>
  <input
    id="sM_1UA"
  />
</div>
<span>
  b
</span>
<label
  for="sM_1VB"
>
  c
</label>
<input
  id="sM_1VB"
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
  for="sM_0TA"
>
  c
</label>
<input
  id="sM_0TA"
/>
<p>
  <label
    for="sM_0UA"
  >
    c
  </label>
  <input
    id="sM_0UA"
  />
</p>
<span>
  c
</span>
```
## Change
```
REMOVE: #sM_0TA + span
UPDATE: label::text "b" => "c"
REMOVE: p + div
UPDATE: p > label::text "b" => "c"
REMOVE: span + label
REMOVE: span + #sM_1VB
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
