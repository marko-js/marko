# Render `{"items":[{"key":"a","on":true},{"key":"b","on":false}]}`
```html
<label
  for="sM_0UA"
>
  a
</label>
<input
  id="sM_0UA"
/>
<span>
  b
</span>
<p>
  <label
    for="sM_0VA"
  >
    a
  </label>
  <input
    id="sM_0VA"
  />
</p>
<div>
  <label
    for="sM_1VA"
  >
    b
  </label>
  <input
    id="sM_1VA"
  />
</div>
<span>
  a
</span>
<label
  for="sM_1WB"
>
  b
</label>
<input
  id="sM_1WB"
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
  for="sM_0UA"
>
  b
</label>
<input
  id="sM_0UA"
/>
<span>
  c
</span>
<p>
  <label
    for="sM_0VA"
  >
    b
  </label>
  <input
    id="sM_0VA"
  />
</p>
<div>
  <label
    for="sM_1VA"
  >
    c
  </label>
  <input
    id="sM_1VA"
  />
</div>
<span>
  b
</span>
<label
  for="sM_1WB"
>
  c
</label>
<input
  id="sM_1WB"
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
  for="sM_0UA"
>
  c
</label>
<input
  id="sM_0UA"
/>
<p>
  <label
    for="sM_0VA"
  >
    c
  </label>
  <input
    id="sM_0VA"
  />
</p>
<span>
  c
</span>
```
## Change
```
UPDATE: label::text "b" => "c"
REMOVE: #sM_0UA + span
UPDATE: p > label::text "b" => "c"
REMOVE: p + div
UPDATE: span::text "b" => "c"
REMOVE: span + label
REMOVE: span + #sM_1WB
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
