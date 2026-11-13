# Render `{"heading":"provided-heading","items":[{"key":"a","uid":"provided-a"},{"key":"b"}]}`
```html
<h1
  id="provided-heading"
>
  Fields
</h1>
<label
  for="sM_B"
>
  second
</label>
<input
  id="sM_B"
/>
<label
  for="provided-a"
>
  a
</label>
<input
  aria-describedby="provided-heading"
  id="provided-a"
/>
<label
  for="sM_gbTA"
>
  b
</label>
<input
  aria-describedby="provided-heading"
  id="sM_gbTA"
/>
<label
  for="given"
>
  local
</label>
<input
  id="given"
/>
<button>
  toggle
</button>
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

# Update `{"items":[{"key":"b"},{"key":"c","uid":"provided-c"}]}`
```html
<h1
  id="sM_A"
>
  Fields
</h1>
<label
  for="sM_B"
>
  second
</label>
<input
  id="sM_B"
/>
<label
  for="sM_gbTA"
>
  b
</label>
<input
  aria-describedby="sM_A"
  id="sM_gbTA"
/>
<label
  for="provided-c"
>
  c
</label>
<input
  aria-describedby="sM_A"
  id="provided-c"
/>
<label
  for="given"
>
  local
</label>
<input
  id="given"
/>
<button>
  toggle
</button>
```
## Change
```
UPDATE: #sM_A[id] "provided-heading" => "sM_A"
REMOVE: #sM_B + label
REMOVE: #sM_B + #provided-a
INSERT: #sM_gbTA + :is(label, #provided-c)
UPDATE: #sM_gbTA[aria-describedby] "provided-heading" => "sM_A"
UPDATE: label:nth-of-type(3)[for] null => "provided-c"
UPDATE: label:nth-of-type(3)::text " " => "c"
UPDATE: #provided-c[id] null => "provided-c"
UPDATE: #provided-c[aria-describedby] null => "sM_A"
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

# Update
```js
document.querySelector("button").click();
```
```html
<h1
  id="sM_A"
>
  Fields
</h1>
<label
  for="sM_B"
>
  second
</label>
<input
  id="sM_B"
/>
<label
  for="sM_gbTA"
>
  b
</label>
<input
  aria-describedby="sM_A"
  id="sM_gbTA"
/>
<label
  for="provided-c"
>
  c
</label>
<input
  aria-describedby="sM_A"
  id="provided-c"
/>
<label
  for="cM_0"
>
  local
</label>
<input
  id="cM_0"
/>
<button>
  toggle
</button>
```
## Change
```
UPDATE: label:nth-of-type(4)[for] "given" => "cM_0"
UPDATE: #cM_0[id] "given" => "cM_0"
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

# Update `{"heading":false,"items":[{"key":"b","uid":"provided-b"},{"key":"c","uid":0}]}`
```html
<h1
  id="sM_A"
>
  Fields
</h1>
<label
  for="sM_B"
>
  second
</label>
<input
  id="sM_B"
/>
<label
  for="provided-b"
>
  b
</label>
<input
  aria-describedby="sM_A"
  id="provided-b"
/>
<label
  for="sM_gcTA"
>
  c
</label>
<input
  aria-describedby="sM_A"
  id="sM_gcTA"
/>
<label
  for="cM_0"
>
  local
</label>
<input
  id="cM_0"
/>
<button>
  toggle
</button>
```
## Change
```
UPDATE: label:nth-of-type(2)[for] "sM_gbTA" => "provided-b"
UPDATE: #provided-b[id] "sM_gbTA" => "provided-b"
UPDATE: label:nth-of-type(3)[for] "provided-c" => "sM_gcTA"
UPDATE: #sM_gcTA[id] "provided-c" => "sM_gcTA"
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

# Update
```js
document.querySelector("button").click();
```
```html
<h1
  id="sM_A"
>
  Fields
</h1>
<label
  for="sM_B"
>
  second
</label>
<input
  id="sM_B"
/>
<label
  for="provided-b"
>
  b
</label>
<input
  aria-describedby="sM_A"
  id="provided-b"
/>
<label
  for="sM_gcTA"
>
  c
</label>
<input
  aria-describedby="sM_A"
  id="sM_gcTA"
/>
<label
  for="given"
>
  local
</label>
<input
  id="given"
/>
<button>
  toggle
</button>
```
## Change
```
UPDATE: label:nth-of-type(4)[for] "cM_0" => "given"
UPDATE: #given[id] "cM_0" => "given"
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

# Update `{"heading":"provided-heading","items":[{"key":"c"},{"key":"d","uid":false}]}`
```html
<h1
  id="provided-heading"
>
  Fields
</h1>
<label
  for="sM_B"
>
  second
</label>
<input
  id="sM_B"
/>
<label
  for="sM_gcTA"
>
  c
</label>
<input
  aria-describedby="provided-heading"
  id="sM_gcTA"
/>
<label
  for="sM_gdTA"
>
  d
</label>
<input
  aria-describedby="provided-heading"
  id="sM_gdTA"
/>
<label
  for="given"
>
  local
</label>
<input
  id="given"
/>
<button>
  toggle
</button>
```
## Change
```
UPDATE: #provided-heading[id] "sM_A" => "provided-heading"
REMOVE: #sM_B + label
REMOVE: #sM_B + #provided-b
INSERT: #sM_gcTA + :is(label, #sM_gdTA)
UPDATE: #sM_gcTA[aria-describedby] "sM_A" => "provided-heading"
UPDATE: label:nth-of-type(3)[for] null => "sM_gdTA"
UPDATE: label:nth-of-type(3)::text " " => "d"
UPDATE: #sM_gdTA[id] null => "sM_gdTA"
UPDATE: #sM_gdTA[aria-describedby] null => "provided-heading"
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
