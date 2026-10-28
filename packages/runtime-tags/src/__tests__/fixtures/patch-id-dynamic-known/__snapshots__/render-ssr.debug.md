# Render `{"items":[{"key":"a","on":true},{"key":"b","on":false}]}`
```html
<label
  for="sM_[0].#text/0@0.uid"
>
  a
</label>
<input
  id="sM_[0].#text/0@0.uid"
/>
<span>
  b
</span>
<p>
  <label
    for="sM_[0].#text/0@1.bodyId"
  >
    a
  </label>
  <input
    id="sM_[0].#text/0@1.bodyId"
  />
</p>
<div>
  <label
    for="sM_[1].#text/0@1.bodyId"
  >
    b
  </label>
  <input
    id="sM_[1].#text/0@1.bodyId"
  />
</div>
<span>
  a
</span>
<label
  for="sM_[1].#text/0@2.nullId"
>
  b
</label>
<input
  id="sM_[1].#text/0@2.nullId"
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
  for="sM_[0].#text/0@0.uid"
>
  b
</label>
<input
  id="sM_[0].#text/0@0.uid"
/>
<span>
  c
</span>
<p>
  <label
    for="sM_[0].#text/0@1.bodyId"
  >
    b
  </label>
  <input
    id="sM_[0].#text/0@1.bodyId"
  />
</p>
<div>
  <label
    for="sM_[1].#text/0@1.bodyId"
  >
    c
  </label>
  <input
    id="sM_[1].#text/0@1.bodyId"
  />
</div>
<span>
  b
</span>
<label
  for="sM_[1].#text/0@2.nullId"
>
  c
</label>
<input
  id="sM_[1].#text/0@2.nullId"
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
  for="sM_[0].#text/0@0.uid"
>
  c
</label>
<input
  id="sM_[0].#text/0@0.uid"
/>
<p>
  <label
    for="sM_[0].#text/0@1.bodyId"
  >
    c
  </label>
  <input
    id="sM_[0].#text/0@1.bodyId"
  />
</p>
<span>
  c
</span>
```
## Change
```
UPDATE: label::text "b" => "c"
REMOVE: #sM_[0].#text/0@0.uid + span
UPDATE: p > label::text "b" => "c"
REMOVE: p + div
UPDATE: span::text "b" => "c"
REMOVE: span + label
REMOVE: span + #sM_[1].#text/0@2.nullId
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
